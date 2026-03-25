import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { X, MessageCircle, Instagram, Send } from "lucide-react";

const WHATSAPP_NUMBER = "+41764783272"; // Replace with actual number
const INSTAGRAM_URL = "https://instagram.com/237rua";

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { t, language } = useLanguage();
  const [name, setName] = useState("");
  const [telephone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const whatsappMessages: Record<string, string> = {
    fr: "Bonjour! Je voudrais en savoir plus sur Rua 237.",
    en: "Hello! I'd like to know more about Rua 237.",
    pt: "Olá! Gostaria de saber mais sobre a Rua 237.",
  };

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessages[language])}`;

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact@rua237.com?subject=Contact from ${name + " " + telephone}&body=${encodeURIComponent(message)}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-card border border-border rounded-lg w-full max-w-md p-8 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={20} />
        </button>

        <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
          {t.ui.contactTitle}
        </h2>

        <form onSubmit={handleEmailSubmit} className="space-y-4 mb-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.ui.namePlaceholder}
            required
            className="w-full px-4 py-3 bg-secondary text-foreground border border-border rounded-sm text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <input
            type="text"
            value={telephone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={t.ui.phonePlaceholder}
            required
            className="w-full px-4 py-3 bg-secondary text-foreground border border-border rounded-sm text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t.ui.messagePlaceholder}
            required
            rows={4}
            className="w-full px-4 py-3 bg-secondary text-foreground border border-border rounded-sm text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
          >
            <Send size={16} />
            {t.ui.sendEmail}
          </button>
        </form>

        <div className="space-y-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[hsl(142,70%,40%)] text-foreground text-sm font-medium rounded-sm hover:bg-[hsl(142,70%,35%)] transition-colors"
          >
            <MessageCircle size={16} />
            {t.ui.whatsapp}
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-border text-muted-foreground text-sm font-medium rounded-sm hover:text-foreground hover:border-foreground/30 transition-colors"
          >
            <Instagram size={16} />
            {t.ui.instagram}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
