import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { useLocation } from "wouter";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [, setLocation] = useLocation();

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    const goToMenuPage = () => {
        setIsMobileMenuOpen(false);
        setLocation("/menu");
    };

    return (
        <header className="bg-white shadow-sm border-b border-orange-100 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-3">
                        <Logo className="w-12 h-12" />
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">AnnRaaj</h1>
                            <p className="text-sm text-gray-600">Catering Services</p>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <button
                            onClick={goToMenuPage}
                            className="bg-black text-orange-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-orange-200 hover:text-orange-800 transition duration-200 text-white"
                        >
                            🍽️ Menu
                        </button>

                        <button
                            onClick={() => scrollToSection("home")}
                            className="text-gray-700 hover:text-primary transition-colors font-medium"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection("about")}
                            className="text-gray-700 hover:text-primary transition-colors font-medium"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection("services")}
                            className="text-gray-700 hover:text-primary transition-colors font-medium"
                        >
                            Services
                        </button>
                        <button
                            onClick={() => scrollToSection("gallery")}
                            className="text-gray-700 hover:text-primary transition-colors font-medium"
                        >
                            Gallery
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="text-gray-700 hover:text-primary transition-colors font-medium"
                        >
                            Contact
                        </button>
                    </nav>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-orange-100">
                    <nav className="px-4 py-4 space-y-2">
                        <button
                            onClick={goToMenuPage}
                            className="block w-full text-left text-gray-700 hover:text-primary font-medium py-2"
                        >
                            Menu
                        </button>
                        <button
                            onClick={() => scrollToSection("home")}
                            className="block w-full text-left text-gray-700 hover:text-primary font-medium py-2"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection("about")}
                            className="block w-full text-left text-gray-700 hover:text-primary font-medium py-2"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection("services")}
                            className="block w-full text-left text-gray-700 hover:text-primary font-medium py-2"
                        >
                            Services
                        </button>
                        <button
                            onClick={() => scrollToSection("gallery")}
                            className="block w-full text-left text-gray-700 hover:text-primary font-medium py-2"
                        >
                            Gallery
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="block w-full text-left text-gray-700 hover:text-primary font-medium py-2"
                        >
                            Contact
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
