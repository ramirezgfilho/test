import { useLanguage } from "@/contexts/LanguageContext";

const LimitedDropsBanner = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-background border-y border-border">
      <div className="max-w-3xl mx-auto text-center px-6">
        <p className="text-primary font-body text-xs font-semibold tracking-[0.35em] uppercase mb-4">
          {t.ui.limitedDropsBanner}
        </p>
        <div className="font-body text-muted-foreground text-base md:text-lg leading-relaxed whitespace-pre-line">
          {t.ui.limitedDropsBannerText}
        </div>
      </div>
    </section>
  );
};

export default LimitedDropsBanner;
