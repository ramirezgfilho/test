import { useLanguage } from "@/contexts/LanguageContext";

const CallToAction = ({ onContactClick }: { onContactClick: () => void }) => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
          {t.ui.ctaTitle}
        </h2>
        <p className="text-muted-foreground font-body text-base md:text-lg mb-8">
          {t.ui.ctaText}
        </p>
        <button
          onClick={onContactClick}
          className="px-10 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors tracking-wide uppercase"
        >
          {t.ui.ctaButton}
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
