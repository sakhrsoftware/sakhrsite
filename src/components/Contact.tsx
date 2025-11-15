import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground">
            Get in touch with our team to learn more about our solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Address</h3>
            <p className="text-muted-foreground">
              Abu Dhabi<br />
              United Arab Emirates
            </p>
          </div>

          <div className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-4">
              <Mail size={24} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Email</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <span className="font-medium">Sales:</span>{" "}
                <a href="mailto:sales@sakhr.ae" className="text-primary hover:underline">
                  sales@sakhr.ae
                </a>
              </p>
              <p>
                <span className="font-medium">Info:</span>{" "}
                <a href="mailto:info@sakhr.ae" className="text-primary hover:underline">
                  info@sakhr.ae
                </a>
              </p>
              <p>
                <span className="font-medium">Support:</span>{" "}
                <a href="mailto:support@sakhr.ae" className="text-primary hover:underline">
                  support@sakhr.ae
                </a>
              </p>
            </div>
          </div>

          <div className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 text-secondary mb-4">
              <Phone size={24} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Phone</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <a href="tel:+97126762888" className="hover:text-primary transition-colors">
                  +971-26762888
                </a>
              </p>
              <p>
                <a href="tel:+971502156216" className="hover:text-primary transition-colors">
                  +971-502156216
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center gap-4 p-6 rounded-xl bg-muted/50">
            <p className="text-foreground font-medium">Ready to get started?</p>
            <Button
              variant="hero"
              size="lg"
              onClick={() => window.location.href = "mailto:sales@sakhr.ae"}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
