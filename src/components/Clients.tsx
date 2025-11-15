import { Building2, GraduationCap, Cpu, Radio } from "lucide-react";

const clientCategories = [
  {
    icon: Building2,
    title: "Government",
    clients: [
      "Health Canada, Government of Canada",
      "European Commission",
      "Kuwait Civil Aviation",
      "Ministry of Labor & Social Affairs, Qatar",
      "Ministry of Trade & Education, Egypt",
      "US Department of State",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education & International Organizations",
    clients: [
      "The Arab League",
      "Bibliotheca Alexandrina",
      "Ministry of Education, Oman",
      "United States Institute of Peace",
      "World Bank",
      "Yale University",
    ],
  },
  {
    icon: Cpu,
    title: "Technology",
    clients: [
      "Kaspersky Lab",
      "Intel",
      "Microsoft",
      "Northrop Grumman",
      "Sony Gulf",
    ],
  },
  {
    icon: Radio,
    title: "Telecommunications",
    clients: [
      "Etisalat",
      "Mobinil",
      "Omantel",
      "Zain",
    ],
  },
];

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Clients</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sakhr Software is the only Middle East-based company to develop a comprehensive suite 
            of Arabic NLP-based software solutions. We serve a distinguished client base across 
            multiple industries and regions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {clientCategories.map((category, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                  <category.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.clients.map((client, clientIndex) => (
                  <li
                    key={clientIndex}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>{client}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
