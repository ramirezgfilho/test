import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { Language, SiteData } from "@/data/content";
import data from "@/data/content";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: SiteData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem("rua237-lang");
    return (stored as Language) || "fr";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("rua237-lang", lang);
  };

  const t = data[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
