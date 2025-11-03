import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code, Rocket } from "lucide-react";
import heroImage from "@/assets/hero-journey.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Layers */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Journey landscape at sunrise"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            <div className="glass-effect px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4 text-primary animate-glow" />
              <span className="text-sm font-medium">No-Code to Full-Stack</span>
            </div>
            <div className="glass-effect px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">8-Week MVPs</span>
            </div>
            <div className="glass-effect px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Co-Creation Model</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center space-y-6 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[1.1] tracking-tight">
              We don't just
              <br />
              <span className="text-gradient-sunrise inline-block relative">
                build your MVP
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              </span>
            </h1>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground/70">
              We build it <span className="text-primary">with you</span>
            </h2>
          </div>
          
          {/* Subtitle */}
          <p className="text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            YayawarTech is your <span className="text-primary font-semibold">nomadic tech studio</span>—wandering with purpose from idea to impact.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <Button 
              size="lg" 
              className="group text-xl px-10 py-8 bg-primary hover:bg-primary/90 shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-hover)] transition-all hover:scale-105"
              onClick={scrollToContact}
            >
              Start your MVP Journey
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-xl px-10 py-8 border-2 border-primary/30 hover:border-primary hover:bg-accent/50 transition-all hover:scale-105"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Our Path
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            {[
              { number: "50+", label: "MVPs Launched" },
              { number: "8 weeks", label: "Average Build Time" },
              { number: "95%", label: "Success Rate" }
            ].map((stat, i) => (
              <div key={i} className="text-center group cursor-default">
                <div className="text-4xl md:text-5xl font-bold text-primary group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-8 h-12 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-4 bg-primary rounded-full animate-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
