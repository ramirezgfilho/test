import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
          {t.brand.aboutTitle}
        </h2>
        <div className="font-body text-muted-foreground text-base md:text-lg leading-relaxed mb-10 space-y-4">
          {t.brand.aboutText.split("\n\n").map((block, i) => (
            <p key={i} className="whitespace-pre-line">{block}</p>
          ))}
        </div>
        <p className="text-primary font-body text-sm font-semibold tracking-[0.35em] uppercase">
          {t.brand.aboutHighlight}
        </p>
      </div>
    </section>
  );
};

export default About;
