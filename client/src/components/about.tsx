import { Leaf, Heart, Quote } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-primary">Annraaj</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bringing authentic flavors and traditional hospitality to your special occasions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">
              Our Heritage & Commitment
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              For over 15 years, Annraaj Catering Services has been the trusted name for authentic Gujarati and Indian cuisine in Ahmedabad. We pride ourselves on preserving traditional cooking methods while meeting modern presentation standards.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our experienced team understands that food is not just about taste—it's about creating memories, honoring traditions, and bringing people together. Whether it's an intimate family gathering or a grand celebration, we ensure every dish reflects our commitment to quality and authenticity.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-cream rounded-lg">
                <Leaf className="text-primary w-12 h-12 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800">Fresh Ingredients</h4>
                <p className="text-sm text-gray-600 mt-2">Sourced daily from local markets</p>
              </div>
              
              <div className="text-center p-4 bg-cream rounded-lg">
                <Heart className="text-primary w-12 h-12 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800">Made with Love</h4>
                <p className="text-sm text-gray-600 mt-2">Traditional recipes passed down generations</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Traditional Indian cooking preparation" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-orange-100 max-w-xs">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="text-white w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Rajesh Patel</p>
                  <p className="text-sm text-gray-600">Happy Customer</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                "Annraaj made our wedding absolutely perfect! The authentic flavors brought back childhood memories."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
