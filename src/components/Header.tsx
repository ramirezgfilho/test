import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/data/content";

const langs: { code: Language; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
];

const Header = ({ onContactClick }: { onContactClick: () => void }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-xl font-bold tracking-tight text-foreground">
          Rua <span className="text-primary">237</span>
        </a>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => setLanguage(l.code)}
                className={`px-2 py-1 rounded-sm font-body text-xs font-medium transition-colors ${
                  language === l.code
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <button
            onClick={onContactClick}
            className="hidden sm:inline-flex px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors"
          >
            {t.ui.contact}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
