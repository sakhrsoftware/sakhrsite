import { Handshake, FlaskConical, Briefcase } from "lucide-react";

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Partners</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sakhr teams with leading research institutions, telecommunications, systems integration, 
            and software companies to jointly develop highly customizable, comprehensive, and proven 
            best-of-breed solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                <FlaskConical size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Research Partners</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                <span>John Hopkins Applied Research Lab</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                <span>Northrop Grumman</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                <span>Raytheon BBN</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Business & Technology</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <span className="text-accent mt-1">•</span>
                <span>Follett Software Company</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <span className="text-accent mt-1">•</span>
                <span>Intel</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <span className="text-accent mt-1">•</span>
                <span>Microsoft</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <span className="text-accent mt-1">•</span>
                <span>PROMT Translation Software</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center p-8 rounded-xl bg-primary/5 border border-primary/20 max-w-4xl mx-auto">
          <Handshake size={48} className="mx-auto mb-4 text-primary" />
          <p className="text-lg text-muted-foreground">
            Together with our partners, we create new business opportunities to expand our joint 
            customer base and deliver innovative solutions to the market.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
