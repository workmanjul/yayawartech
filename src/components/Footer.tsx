import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src={logo} alt="YayawarTech" className="h-32 mb-4 brightness-0 invert" />
            <p className="text-secondary-foreground/80 leading-relaxed">
              Your nomadic tech studio—wandering with purpose from idea to impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigate</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>
                <a href="mailto:hello@yayawartech.com" className="hover:text-primary transition-colors">
                  hello@yayawartech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-foreground/20 text-center text-sm text-secondary-foreground/60">
          <p>© {new Date().getFullYear()} YayawarTech. Building journeys, one MVP at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
