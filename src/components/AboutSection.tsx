import { Card } from "@/components/ui/card";
import { Globe, TrendingDown, Users, Zap } from "lucide-react";

export const AboutSection = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Impact",
      description: "Understanding individual carbon footprints is crucial for collective climate action",
    },
    {
      icon: TrendingDown,
      title: "Reduce Emissions",
      description: "Get personalized recommendations to lower your environmental impact",
    },
    {
      icon: Users,
      title: "Community Action",
      description: "Join thousands making conscious choices for a sustainable future",
    },
    {
      icon: Zap,
      title: "Quick & Easy",
      description: "Calculate your footprint in minutes with our simple, intuitive tool",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Carbon Footprint
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A carbon footprint measures the total greenhouse gas emissions, primarily carbon dioxide 
            and methane, associated with your daily activities. From transportation to energy consumption, 
            food choices to waste generation—every action contributes to your environmental impact. 
            Understanding and reducing your carbon footprint is essential in combating climate change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
