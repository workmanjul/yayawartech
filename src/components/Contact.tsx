import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Calendar } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message received! 🎉",
        description: "We'll reach out within 24 hours to start your journey.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="section-spacing relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 mesh-gradient opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary">Get Started</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              Let's Build
              <br />
              <span className="text-gradient-sunrise">Together</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Tell us where you are on your startup path. No fluff, no pressure. Just purposeful motion.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="glass-effect p-10 rounded-3xl border-2 border-border/50 hover:border-primary/30 transition-colors">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Your name</label>
                  <Input
                    type="text"
                    placeholder="Sarah Chen"
                    required
                    className="h-14 text-lg border-2 focus:border-primary transition-colors bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Your email</label>
                  <Input
                    type="email"
                    placeholder="sarah@startup.com"
                    required
                    className="h-14 text-lg border-2 focus:border-primary transition-colors bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Company (optional)</label>
                  <Input
                    type="text"
                    placeholder="Your startup name"
                    className="h-14 text-lg border-2 focus:border-primary transition-colors bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Tell us about your journey</label>
                  <Textarea
                    placeholder="e.g. I've got an idea and need an MVP in 6 weeks. Looking for a technical co-founder to bring my healthcare platform to life..."
                    required
                    className="min-h-40 text-lg border-2 focus:border-primary transition-colors resize-none bg-background/50"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full text-lg py-6 bg-primary hover:bg-primary/90 shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-hover)] transition-all hover:scale-105 group"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Start the Conversation
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="glass-effect p-8 rounded-2xl border-2 border-border/50 hover:border-primary/30 transition-all hover:-translate-y-1 group">
                <Mail className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Email us directly</h3>
                <a href="mailto:hello@yayawartech.com" className="text-primary hover:underline text-lg font-medium">
                  hello@yayawartech.com
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  We typically respond within 24 hours
                </p>
              </div>

              {/* Book a Call */}
              <div className="glass-effect p-8 rounded-2xl border-2 border-border/50 hover:border-primary/30 transition-all hover:-translate-y-1 group">
                <Calendar className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Book a discovery call</h3>
                <p className="text-muted-foreground mb-4">
                  30-minute session to explore your MVP journey
                </p>
                <Button variant="outline" className="w-full border-2 hover:border-primary hover:bg-accent/50">
                  Schedule a call
                </Button>
              </div>

              {/* What to Expect */}
              <div className="glass-effect p-8 rounded-2xl border-2 border-primary/20">
                <h3 className="text-xl font-bold mb-4">What happens next?</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", text: "We review your message within 24 hours" },
                    { step: "2", text: "Schedule a discovery call to align on vision" },
                    { step: "3", text: "Receive a tailored proposal & timeline" },
                    { step: "4", text: "Start building your MVP together" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold text-primary">
                        {item.step}
                      </div>
                      <p className="text-foreground/80 pt-1">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
