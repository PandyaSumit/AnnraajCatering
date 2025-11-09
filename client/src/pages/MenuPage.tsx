import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { Download } from "lucide-react";
import { categorizedMenuItems, getItemById, type Category } from "../lib/menuData";

export const MenuPage: React.FC = () => {
    const [guests, setGuests] = useState<number>(1);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [activeCategory, setActiveCategory] = useState<Category>("Starters");

    const toggleItem = (id: string) => {
        setSelectedItems((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.text("Event Catering Menu", 20, 20);
        doc.setFontSize(12);
        doc.text(`Number of Guests: ${guests}`, 20, 30);

        let y = 45;
        let total = 0;

        doc.setFont("helvetica", "bold");
        doc.text("Item", 20, y);
        doc.text("Price/Person", 90, y);
        doc.text("Total", 160, y);
        y += 10;
        doc.setFont("helvetica", "normal");

        selectedItems.forEach((id) => {
            const item = getItemById(id);
            if (item) {
                const itemTotal = item.pricePerPerson * guests;
                total += itemTotal;

                doc.text(item.name, 20, y);
                doc.text(`₹${item.pricePerPerson}`, 90, y);
                doc.text(`₹${itemTotal}`, 160, y);
                y += 10;
            }
        });

        doc.setFont("helvetica", "bold");
        doc.text(`Total: ₹${total}`, 160, y + 10);
        doc.save("CateringMenu.pdf");
    };

    const totalCost = selectedItems.reduce((sum, id) => {
        const item = getItemById(id);
        return item ? sum + item.pricePerPerson * guests : sum;
    }, 0);

    return (
        <div className="min-h-screen bg-orange-50 py-10 px-4">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">
                <h1 className="text-3xl font-bold text-orange-700 text-center mb-6">
                    Catering Menu Customization
                </h1>

                {/* Guests Input */}
                <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
                    <label htmlFor="guests" className="text-lg font-medium text-gray-800">
                        Number of Guests:
                    </label>
                    <input
                        id="guests"
                        type="number"
                        min={1}
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                        className="w-full sm:w-40 border border-orange-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                    {Object.keys(categorizedMenuItems).map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category as Category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium border ${activeCategory === category
                                    ? "bg-orange-600 text-white border-orange-600"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-orange-100"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full table-auto border border-orange-200 rounded-md mb-6">
                        <thead className="bg-orange-100 text-orange-800">
                            <tr>
                                <th className="p-3 text-left">Select</th>
                                <th className="p-3 text-left">Item</th>
                                <th className="p-3 text-left">Description</th>
                                <th className="p-3 text-right">Price/Person</th>
                                <th className="p-3 text-right">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categorizedMenuItems[activeCategory].map((item) => {
                                const isSelected = selectedItems.includes(item.id);
                                const itemTotal = item.pricePerPerson * guests;

                                return (
                                    <tr
                                        key={item.id}
                                        className={`border-t ${isSelected ? "bg-orange-50" : "bg-white"
                                            }`}
                                    >
                                        <td className="p-3">
                                            <input
                                                type="checkbox"
                                                checked={isSelected}
                                                onChange={() => toggleItem(item.id)}
                                            />
                                        </td>
                                        <td className="p-3 font-medium">{item.name}</td>
                                        <td className="p-3 text-sm text-gray-600">{item.description}</td>
                                        <td className="p-3 text-right">₹{item.pricePerPerson}</td>
                                        <td className="p-3 text-right">
                                            ₹{isSelected ? itemTotal : 0}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
                    <div className="text-xl font-semibold text-gray-800">
                        Total Price:{" "}
                        <span className="text-orange-700 font-bold">₹{totalCost}</span>
                    </div>
                    <button
                        onClick={generatePDF}
                        className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg shadow-md"
                    >
                        <Download className="h-5 w-5" />
                        Download Menu PDF
                    </button>
                </div>
            </div>
        </div>
    );
};
