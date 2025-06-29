import { Images } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Gallery() {
  const galleryItems = [
    {
      src: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      alt: "Traditional Gujarati Thali",
      title: "Traditional Gujarati Thali",
      subtitle: "Complete traditional meal"
    },
    {
      src: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      alt: "Wedding banquet setup",
      title: "Wedding Banquet",
      subtitle: "Grand celebration setup"
    },
    {
      src: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      alt: "Traditional Indian sweets collection",
      title: "Traditional Sweets",
      subtitle: "Handcrafted desserts"
    },
    {
      src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      alt: "Indian buffet spread with curry dishes",
      title: "Buffet Spread",
      subtitle: "Variety of curries"
    },
    {
      src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      alt: "Indian street food and chaat platter",
      title: "Street Food Specials",
      subtitle: "Chaat and snacks"
    },
    {
      src: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      alt: "Fresh Indian rotis and naan breads",
      title: "Fresh Breads",
      subtitle: "Rotis and naans"
    },
    {
      src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      alt: "Vegetarian curry dishes in traditional bowls",
      title: "Vegetarian Curries",
      subtitle: "Traditional flavors"
    },
    {
      src: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      alt: "Festive Indian food with traditional decorations",
      title: "Festival Specials",
      subtitle: "Celebration foods"
    }
  ];

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Food <span className="text-primary">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A visual feast showcasing our culinary artistry and authentic Indian flavors
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img 
                src={item.src}
                alt={item.alt}
                className="w-full h-48 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                  <p className="text-gray-200 text-sm">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-4 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2 mx-auto"
          >
            <Images className="w-5 h-5" />
            <span>View More Photos</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
