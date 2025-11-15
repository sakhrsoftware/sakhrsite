import { Award, Globe, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Sakhr Software
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sakhr Software Company is a pioneer and market leader in advanced Arabic language 
            technology and solutions. With 40+ years of leading research and development in Arabic 
            computational linguistics, Sakhr has successfully transformed its research in Natural 
            Language Processing (NLP) into industry-first commercial software and solutions. 
            Governments and enterprises in multiple industries across the Arab region and beyond 
            use Sakhr's award-winning technology to handle any Arabic content for the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <Award size={32} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">40+ Years</h3>
            <p className="text-muted-foreground">
              Leading research and development in Arabic computational linguistics
            </p>
          </div>

          <div className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
              <Globe size={32} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Global Reach</h3>
            <p className="text-muted-foreground">
              Serving governments and enterprises across GCC, North Africa, North America, and Europe
            </p>
          </div>

          <div className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-4">
              <Users size={32} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Industry Leader</h3>
            <p className="text-muted-foreground">
              Award-winning technology trusted by major organizations worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
