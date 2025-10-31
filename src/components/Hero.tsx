import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import campusImage from "@/assets/campus.png";

export const Hero = () => {
  const scrollToCalculator = () => {
    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[700px] flex items-center justify-center px-4 py-20 overflow-hidden mt-16">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${campusImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-primary/10 backdrop-blur-sm">
              <Leaf className="w-16 h-16 text-primary" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            Calculate Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Carbon Footprint
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            IIT Kharagpur Carbon Footprint Calculator - Measure your environmental impact across transportation, energy, lifestyle, and consumption
          </p>
          
          <div className="pt-6">
            <Button
              onClick={scrollToCalculator}
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Calculate Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
