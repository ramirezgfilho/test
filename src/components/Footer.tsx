import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="px-6 py-8 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-lg font-bold text-foreground">
          Rua <span className="text-primary">237</span>
        </span>
        <p className="text-muted-foreground font-body text-xs">
          {t.ui.footerText}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
