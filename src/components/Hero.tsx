import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Arabic language technology and AI"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Leading Arabic Language Technology
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          28+ years of pioneering research and development in advanced Arabic NLP solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="secondary"
            size="lg"
            onClick={scrollToContact}
            className="text-lg px-8"
          >
            Get Started
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              const element = document.getElementById("products");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-lg px-8 bg-white/10 text-white border-white hover:bg-white hover:text-primary backdrop-blur-sm"
          >
            Explore Products
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
