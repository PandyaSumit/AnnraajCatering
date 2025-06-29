import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.event || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      event: '',
      message: ''
    });
  };

  const handleCallNow = () => {
    window.open('tel:+919876543210', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210', '_blank');
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Contact <span className="text-primary">Us</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to make your event delicious? Get in touch with us today
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">Get In Touch</h3>
            
            <div className="flex items-start space-x-4 p-6 bg-cream rounded-2xl">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="text-white w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-lg">Phone Number</h4>
                <p className="text-gray-600 mb-2">Call us for immediate assistance</p>
                <a href="tel:+919876543210" className="text-primary font-semibold text-lg hover:text-secondary transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-cream rounded-2xl">
              <div className="w-12 h-12 bg-accent/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="text-secondary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-lg">Email Address</h4>
                <p className="text-gray-600 mb-2">Send us your requirements</p>
                <a href="mailto:info@annraajcatering.com" className="text-primary font-semibold text-lg hover:text-secondary transition-colors">
                  info@annraajcatering.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-cream rounded-2xl">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="text-secondary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-lg">Location</h4>
                <p className="text-gray-600 mb-2">Visit our kitchen</p>
                <p className="text-primary font-semibold text-lg">
                  Maninagar, Ahmedabad,<br />
                  Gujarat 380008
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-cream rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-lg">Business Hours</h4>
                <p className="text-gray-600 mb-2">We're available when you need us</p>
                <div className="text-gray-700">
                  <p>Mon - Sat: 8:00 AM - 10:00 PM</p>
                  <p>Sunday: 9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-cream rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name *</label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="event" className="block text-gray-700 font-medium mb-2">Event Type *</label>
                <Select value={formData.event} onValueChange={(value) => setFormData({...formData, event: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="birthday">Birthday Party</SelectItem>
                    <SelectItem value="corporate">Corporate Event</SelectItem>
                    <SelectItem value="religious">Religious Function</SelectItem>
                    <SelectItem value="home">Home Party</SelectItem>
                    <SelectItem value="festival">Festival Celebration</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message *</label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your event requirements, guest count, preferred date, and any special requests..."
                  rows={4}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">Need Immediate Assistance?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleCallNow}
              className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </Button>
            <Button 
              onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106z"/>
              </svg>
              <span>WhatsApp</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
