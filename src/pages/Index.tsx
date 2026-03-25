import { useState, useRef } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LimitedDropsBanner from "@/components/LimitedDropsBanner";
import About from "@/components/About";
import Catalog from "@/components/Catalog";
import CallToAction from "@/components/CallToAction";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

const IndexContent = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onContactClick={() => setContactOpen(true)} />
      <Hero
        onContactClick={() => setContactOpen(true)}
        onDiscoverClick={scrollToMenu}
      />
      
      <About />
      <Catalog />
      <CallToAction onContactClick={() => setContactOpen(true)} />
      <Footer />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <IndexContent />
    </LanguageProvider>
  );
};

export default Index;
