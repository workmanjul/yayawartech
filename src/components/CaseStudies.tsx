import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    founder: "Sarah Chen",
    role: "Founder & CEO",
    company: "HealthFlow",
    story: "From scattered health records to a unified patient platform—launched in 8 weeks.",
    challenge: "Healthcare data fragmentation",
    solution: "HIPAA-compliant unified dashboard",
    impact: "10K+ users in first month",
    metrics: [
      { label: "User Growth", value: "300%" },
      { label: "Time Saved", value: "2hrs/day" },
    ],
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    gradient: "from-blue-500/10 via-cyan-500/10 to-teal-500/10",
    borderGradient: "from-blue-500 to-cyan-500",
  },
  {
    founder: "Marcus Rodriguez",
    role: "Co-Founder",
    company: "LocalHarvest",
    story: "Connected local farmers with urban communities through a marketplace MVP.",
    challenge: "Farm-to-table supply chain inefficiency",
    solution: "Direct marketplace with logistics",
    impact: "50+ farmers onboarded",
    metrics: [
      { label: "GMV", value: "$250K" },
      { label: "Orders", value: "2K+" },
    ],
    tech: ["Next.js", "Stripe", "Supabase", "Vercel"],
    gradient: "from-green-500/10 via-emerald-500/10 to-lime-500/10",
    borderGradient: "from-green-500 to-emerald-500",
  },
  {
    founder: "Aisha Patel",
    role: "Solo Founder",
    company: "TutorMatch",
    story: "Built an AI-powered tutor matching platform that found product-market fit in 6 weeks.",
    challenge: "Quality tutor discovery at scale",
    solution: "AI matching with live video sessions",
    impact: "1,000+ matches made",
    metrics: [
      { label: "Match Rate", value: "94%" },
      { label: "Retention", value: "85%" },
    ],
    tech: ["TypeScript", "OpenAI", "Firebase", "Tailwind"],
    gradient: "from-purple-500/10 via-pink-500/10 to-rose-500/10",
    borderGradient: "from-purple-500 to-pink-500",
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="section-spacing relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">Success Stories</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            Journeys We've
            <br />
            <span className="text-gradient-sunrise">Walked Together</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Real founders. Real MVPs. Real momentum.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card
              key={study.company}
              className="group relative p-8 bg-card border-2 hover:border-transparent transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Animated Border Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${study.borderGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl font-bold text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      {study.founder.charAt(0)}
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{study.company}</h3>
                  <p className="text-sm text-muted-foreground">
                    {study.founder} · {study.role}
                  </p>
                </div>

                {/* Story */}
                <p className="text-foreground/90 leading-relaxed mb-6 text-lg">
                  {study.story}
                </p>

                {/* Challenge & Solution */}
                <div className="space-y-3 mb-6 p-4 bg-background/50 rounded-xl">
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase">Challenge</span>
                    <p className="text-sm font-medium">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase">Solution</span>
                    <p className="text-sm font-medium">{study.solution}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="text-center p-4 bg-primary/5 rounded-xl group-hover:bg-primary/10 transition-colors">
                      <div className="text-2xl font-bold text-primary">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Impact Badge */}
                <div className="mb-6 py-3 px-4 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-xl border border-primary/20">
                  <p className="text-sm font-semibold text-primary text-center">{study.impact}</p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {study.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs font-medium">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Read More */}
                <button className="mt-6 w-full flex items-center justify-center gap-2 text-primary font-semibold py-3 px-6 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors opacity-0 group-hover:opacity-100">
                  View case study
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
