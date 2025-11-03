import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

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
    <section id="contact" className="section-spacing bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Build Together
            </h2>
            <p className="text-xl text-muted-foreground">
              Tell us where you are on your startup path. No fluff, no pressure. Just purposeful motion.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Your name"
                required
                className="h-14 text-lg border-2 focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                required
                className="h-14 text-lg border-2 focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Textarea
                placeholder="e.g. I've got an idea and need an MVP in 6 weeks..."
                required
                className="min-h-40 text-lg border-2 focus:border-primary transition-colors resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full text-lg py-6 bg-primary hover:bg-primary/90 shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-hover)] transition-all"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Start the Conversation
                  <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Or email us directly at{" "}
              <a href="mailto:hello@yayawartech.com" className="text-primary hover:underline font-medium">
                hello@yayawartech.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
