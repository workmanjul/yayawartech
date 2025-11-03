import { Card } from "@/components/ui/card";
import { Sparkles, Hammer, Rocket } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Brand",
    description: "We shape your story, your voice, and your visual identity—building trust before the first line of code.",
    features: ["Brand Strategy", "Visual Identity", "Messaging & Voice", "Design Systems"],
  },
  {
    icon: Hammer,
    title: "Build",
    description: "From zero to MVP. We co-create alongside you with modern tech, lean processes, and founder-first focus.",
    features: ["MVP Development", "Product Design", "Technical Architecture", "Agile Iterations"],
  },
  {
    icon: Rocket,
    title: "Grow",
    description: "Launch is just the beginning. We help you find your first users, validate your market, and scale with intention.",
    features: ["Growth Strategy", "User Acquisition", "Analytics & Insights", "Product-Market Fit"],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-spacing bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Three Pillars of Your Journey
          </h2>
          <p className="text-xl text-muted-foreground">
            We walk with you through every stage—from vision to velocity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="p-8 card-journey bg-card border-2 hover:border-primary/50"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-border">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
