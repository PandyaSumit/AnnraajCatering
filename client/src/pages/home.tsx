import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import GujaratiText from "@/components/gujarati-text";
import Services from "@/components/services";
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <GujaratiText />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
