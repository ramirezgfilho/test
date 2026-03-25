import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = ({
  onContactClick,
  onDiscoverClick,
}: {
  onContactClick: () => void;
  onDiscoverClick: () => void;
}) => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/75" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-in">
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
          {t.brand.slogan}
        </h1>
        <p className="text-muted-foreground font-body text-sm md:text-base tracking-[0.35em] uppercase mb-12">
          {t.brand.heroText}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onDiscoverClick}
            className="px-8 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors tracking-wide uppercase"
          >
            {t.ui.discover}
          </button>
          <button
            onClick={onContactClick}
            className="px-8 py-3 text-sm font-medium border border-foreground/20 text-foreground rounded-sm hover:border-primary hover:text-primary transition-colors tracking-wide uppercase"
          >
            {t.ui.contact}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
