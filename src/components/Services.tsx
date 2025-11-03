import { Card } from "@/components/ui/card";
import { Sparkles, Hammer, Rocket, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Brand",
    tagline: "Identity that resonates",
    description: "We shape your story, your voice, and your visual identity—building trust before the first line of code.",
    features: ["Brand Strategy", "Visual Identity", "Messaging & Voice", "Design Systems"],
    highlight: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Hammer,
    title: "Build",
    tagline: "Tech that scales",
    description: "From zero to MVP. We co-create alongside you with modern tech, lean processes, and founder-first focus.",
    features: ["MVP Development", "Product Design", "Technical Architecture", "Agile Iterations"],
    highlight: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Rocket,
    title: "Grow",
    tagline: "Momentum that lasts",
    description: "Launch is just the beginning. We help you find your first users, validate your market, and scale with intention.",
    features: ["Growth Strategy", "User Acquisition", "Analytics & Insights", "Product-Market Fit"],
    highlight: "from-green-500/20 to-emerald-500/20",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-spacing bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-glow rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20 animate-slide-up">
          <div className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">What We Do</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            Three Pillars of
            <br />
            <span className="text-gradient-sunrise">Your Journey</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            We walk with you through every stage—from vision to velocity.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group relative p-10 bg-card border-2 hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-[var(--shadow-hover)] overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.highlight} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                    <service.icon className="w-10 h-10 text-primary group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-primary font-semibold mb-4">{service.tagline}</p>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 pt-6 border-t border-border">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 group/item">
                      <div className="w-2 h-2 rounded-full bg-primary group-hover/item:w-4 transition-all" />
                      <span className="text-foreground/90 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More */}
                <button className="mt-8 flex items-center gap-2 text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
