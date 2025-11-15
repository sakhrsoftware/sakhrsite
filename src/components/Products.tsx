import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, FileText, Languages, Mic, Database, Search } from "lucide-react";

const products = [
  {
    icon: CheckCircle2,
    title: "Linguistic Correction",
    subtitle: "Sahehly",
    description:
      "Step into the future of Arabic textual perfection with Sahehly. Our sophisticated suite of tools ensures thorough linguistic corrections and precise text shaping tailored to your unique needs, employing extensive research and state-of-the-art AI.",
  },
  {
    icon: FileText,
    title: "Arabic OCR",
    subtitle: "Optical Character Recognition",
    description:
      "Award-winning, highly intelligent OCR solution that addresses the complexities of Arabic language and fonts, including cursive writing, diacritics, position-dependent character shapes, overlapping, and non-standard fonts.",
  },
  {
    icon: Languages,
    title: "Machine Translation",
    subtitle: "Arabic-English",
    description:
      "Bidirectional machine translation for Arabic-English. Sakhr MT is the world's most accurate, due to decades of NLP research. A hybrid engine that optimizes rules-based and statistical-based processes for highest accuracy translation.",
  },
  {
    icon: Mic,
    title: "Text-to-Speech",
    subtitle: "Arabic TTS",
    description:
      "Industry leader in synthesizing a natural, human-sounding Arabic voice. Leverages 28+ years of research and corpora development in Arabic NLP to overcome TTS challenges like lack of diacritics and punctuation.",
  },
  {
    icon: Database,
    title: "Document Management",
    subtitle: "ArabDox",
    description:
      "Enables classifying, organizing, indexing, storing and retrieving documents in Arabic, English and French. Successfully supports over 12,000 users and a repository of 10 million documents with full Microsoft environment integration.",
  },
  {
    icon: Search,
    title: "Search Engine",
    subtitle: "IDRISI",
    description:
      "Modern Arabic Search Technology utilizing the linguistic features of both Arabic and English languages. Performs morphological analysis on each word to provide outstanding search capabilities for databases, text files, and web pages.",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-leading Arabic NLP solutions powering digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50"
            >
              <CardHeader>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 text-primary mb-4">
                  <product.icon size={28} />
                </div>
                <CardTitle className="text-2xl">{product.title}</CardTitle>
                <CardDescription className="text-accent font-medium">
                  {product.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
