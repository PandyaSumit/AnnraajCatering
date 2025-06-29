import { Phone, Mail, Award, Users, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";

export default function Hero() {
  const handleCallNow = () => {
    window.open('tel:+919879381605', '_self');
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-primary/10 to-accent/20 py-20 lg:py-28">
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: "repeating-linear-gradient(45deg, hsl(29, 78%, 41%), hsl(29, 78%, 41%) 2px, transparent 2px, transparent 20px)"
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Logo className="w-24 h-24 lg:w-32 lg:h-32" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 mb-6">
            <span className="text-primary">AnnRaaj</span> Catering
            <br />
            <span className="text-secondary">Services</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-700 mb-4 font-medium">
            Serving Taste & Tradition Since 1992
          </p>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience authentic Gujarati flavors and traditional Indian cuisine crafted with love and expertise for over 32 years in Surat.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleCallNow}
              className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </Button>
            
            <Button 
              onClick={scrollToContact}
              variant="outline"
              className="bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-4 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Get Quote</span>
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                <Award className="text-primary w-8 h-8" />
              </div>
              <span className="text-2xl font-bold text-gray-800">32+</span>
              <span className="text-gray-600">Years Experience</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-2">
                <Users className="text-secondary w-8 h-8" />
              </div>
              <span className="text-2xl font-bold text-gray-800">1000+</span>
              <span className="text-gray-600">Happy Events</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                <Utensils className="text-primary w-8 h-8" />
              </div>
              <span className="text-2xl font-bold text-gray-800">50+</span>
              <span className="text-gray-600">Menu Items</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
