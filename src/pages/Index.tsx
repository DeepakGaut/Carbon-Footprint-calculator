import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { CalculatorSection } from "@/components/CalculatorSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <Header />
      <Hero />
      <AboutSection />
      <CalculatorSection />
      <Footer />
    </div>
  );
};

export default Index;
