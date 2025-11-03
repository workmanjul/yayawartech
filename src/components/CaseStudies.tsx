import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    founder: "Sarah Chen",
    company: "HealthFlow",
    story: "From scattered health records to a unified patient platform—launched in 8 weeks.",
    impact: "10K+ users in first month",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    founder: "Marcus Rodriguez",
    company: "LocalHarvest",
    story: "Connected local farmers with urban communities through a marketplace MVP.",
    impact: "50+ farmers onboarded",
    tech: ["Next.js", "Stripe", "Supabase", "Vercel"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    founder: "Aisha Patel",
    company: "TutorMatch",
    story: "Built an AI-powered tutor matching platform that found product-market fit in 6 weeks.",
    impact: "1,000+ matches made",
    tech: ["TypeScript", "OpenAI", "Firebase", "Tailwind"],
    color: "from-purple-500/20 to-pink-500/20",
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="section-spacing">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Journeys We've Walked Together
          </h2>
          <p className="text-xl text-muted-foreground">
            Real founders. Real MVPs. Real momentum.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study) => (
            <Card
              key={study.company}
              className="p-6 card-journey bg-card border-2 hover:border-primary/30 overflow-hidden relative"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-0 hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary mb-3">
                    {study.founder.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold">{study.company}</h3>
                  <p className="text-sm text-muted-foreground">{study.founder}</p>
                </div>

                {/* Story */}
                <p className="text-foreground/80 leading-relaxed mb-4">
                  {study.story}
                </p>

                {/* Impact */}
                <div className="mb-4 py-3 px-4 bg-muted/50 rounded-lg">
                  <p className="text-sm font-semibold text-primary">{study.impact}</p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {study.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
