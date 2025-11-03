import { Card } from "@/components/ui/card";
import { Compass, Map, Flag, Rocket } from "lucide-react";

const processSteps = [
  {
    icon: Compass,
    title: "Discovery",
    week: "Week 1",
    description: "We map your vision, validate your idea, and define clear success metrics together.",
    deliverables: ["Market research", "User personas", "Feature roadmap"],
  },
  {
    icon: Map,
    title: "Design",
    week: "Weeks 2-3",
    description: "Co-create the user experience with wireframes, prototypes, and brand identity.",
    deliverables: ["UI/UX design", "Brand system", "Interactive prototype"],
  },
  {
    icon: Rocket,
    title: "Build",
    week: "Weeks 4-7",
    description: "Agile sprints bring your MVP to life with weekly check-ins and live demos.",
    deliverables: ["Core features", "Tested code", "Weekly iterations"],
  },
  {
    icon: Flag,
    title: "Launch",
    week: "Week 8",
    description: "Deploy with confidence. We stay with you through launch and initial user feedback.",
    deliverables: ["Production deploy", "Analytics setup", "Growth strategy"],
  },
];

const Process = () => {
  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">The Journey Map</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            From Idea to
            <br />
            <span className="text-gradient-sunrise">Live Product</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            An 8-week co-creation journey—transparent, collaborative, and purposeful.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-7xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card
                key={step.title}
                className="relative p-8 glass-effect border-2 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <div className="text-xs font-semibold text-primary mb-2">{step.week}</div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="space-y-2 pt-4 border-t border-border/50">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    Deliverables
                  </div>
                  {step.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <p className="text-xl text-muted-foreground mb-6">
            Every journey is unique. Let's map yours together.
          </p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-primary font-semibold hover:underline text-lg"
          >
            Start planning your MVP →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
