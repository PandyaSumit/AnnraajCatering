import { Heart, Cake, Building, Star, Home, Sparkles, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: "Wedding Catering",
      description: "Make your special day unforgettable with our extensive wedding menu featuring traditional Gujarati thali, North Indian delicacies, and customized options.",
      features: ["Pre-wedding functions", "Wedding ceremony", "Reception dinner"],
      bgColor: "bg-primary/10",
      iconColor: "text-primary",
      hoverBg: "group-hover:bg-primary"
    },
    {
      icon: Cake,
      title: "Birthday Parties",
      description: "Celebrate life's milestones with delicious food that brings smiles to faces. From kids' parties to milestone birthdays, we've got you covered.",
      features: ["Kids birthday specials", "Adult celebrations", "Custom themed menus"],
      bgColor: "bg-accent/20",
      iconColor: "text-secondary",
      hoverBg: "group-hover:bg-accent"
    },
    {
      icon: Building,
      title: "Corporate Events",
      description: "Professional catering services for your business events, meetings, and corporate celebrations with timely service and quality presentation.",
      features: ["Office meetings", "Product launches", "Annual parties"],
      bgColor: "bg-secondary/10",
      iconColor: "text-secondary",
      hoverBg: "group-hover:bg-secondary"
    },
    {
      icon: Star,
      title: "Religious Functions",
      description: "Sacred occasions deserve special attention. We provide pure vegetarian, satvik meals for pujas, festivals, and religious celebrations.",
      features: ["Puja ceremonies", "Festival celebrations", "Satvik menu options"],
      bgColor: "bg-primary/10",
      iconColor: "text-primary",
      hoverBg: "group-hover:bg-primary"
    },
    {
      icon: Home,
      title: "Home Parties",
      description: "Intimate gatherings at home deserve restaurant-quality food. We bring professional catering right to your doorstep for any occasion.",
      features: ["Family gatherings", "House warming", "Intimate celebrations"],
      bgColor: "bg-accent/20",
      iconColor: "text-secondary",
      hoverBg: "group-hover:bg-accent"
    },
    {
      icon: Sparkles,
      title: "Festival Catering",
      description: "Celebrate Indian festivals with authentic traditional foods. From Navratri to Diwali, we bring the flavors of celebration to your events.",
      features: ["Navratri specials", "Diwali celebrations", "Regional festivals"],
      bgColor: "bg-secondary/10",
      iconColor: "text-secondary",
      hoverBg: "group-hover:bg-secondary"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we cater to all your special occasions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-cream hover:bg-white group transition-all duration-300 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-orange-100"
              >
                <div className={`w-16 h-16 ${service.bgColor} ${service.hoverBg} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300`}>
                  <IconComponent className={`${service.iconColor} group-hover:text-white w-8 h-8 transition-colors duration-300`} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 text-gray-700">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Plan Your Event?</h3>
          <p className="text-gray-600 mb-8">Contact us today for a customized quote and menu consultation</p>
          <Button 
            onClick={scrollToContact}
            className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2 mx-auto"
          >
            <CalendarCheck className="w-5 h-5" />
            <span>Book Consultation</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
