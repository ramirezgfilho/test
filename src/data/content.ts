export type Language = "fr" | "en" | "pt";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: string;
  category: string;
}

export interface SiteData {
  brand: {
    slogan: string;
    heroText: string;
    aboutTitle: string;
    aboutText: string;
    aboutHighlight: string;
  };
  ui: {
    discover: string;
    contact: string;
    allCategories: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
    contactTitle: string;
    namePlaceholder: string;
    phonePlaceholder : string;
    messagePlaceholder: string;
    sendEmail: string;
    whatsapp: string;
    instagram: string;
    footerText: string;
    catalogTitle: string;
    limitedDropsTitle: string;
    limitedDropsText: string;
    limitedDropsBanner: string;
    limitedDropsBannerText: string;
    signatureSeriesTitle: string;
  };
  categories: string[];
  products: Product[];
  limitedDrops: Product[];
}

const data: Record<Language, SiteData> = {
  fr: {
    brand: {
      slogan: "Brazilian Bites, Elevated.",
      heroText: "Urban. Structured. Precise.",
      aboutTitle: "Le Concept",
      aboutText: "Rua 237 redéfinit la street food brésilienne par la structure et la précision.\n\nBâti sur des bases solides.\nAffiné pour la rue moderne.\n\nBrazilian bites, elevated.",
      aboutHighlight: "Précision. Structure. Intensité.",
    },
    ui: {
      discover: "Explorer le Menu",
      contact: "Contact",
      allCategories: "Tous",
      ctaTitle: "Passez votre commande 237.",
      ctaText: "Pour événements, commandes privées et collaborations.",
      ctaButton: "Contact",
      contactTitle: "Contact",
      namePlaceholder: "Votre nom",
      phonePlaceholder: "Votre numéro de téléphone",
      messagePlaceholder: "Votre message...",
      sendEmail: "Envoyer par email",
      whatsapp: "Discuter sur WhatsApp",
      instagram: "Suivre sur Instagram",
      footerText: "\u00a9 2026 Rua 237. Tous droits réservés.",
      catalogTitle: "Le Menu",
      limitedDropsTitle: "Limited Drops",
      limitedDropsText: "Disponible cette semaine uniquement.\nQuantités limitées.",
      limitedDropsBanner: "Limited Drops",
      limitedDropsBannerText: "Produit en séries limitées.\nSur pré-commande uniquement.",
      signatureSeriesTitle: "Signature Series",
    },
    categories: ["Signature", "Classiques", "Event", "Limited Drops"],
    products: [
      { id: "coxinha-237", name: "237 Coxinha", description: "Crisp shell. Slow-cooked chicken.", image: "", category: "Signature" },
      { id: "swiss-heat-bolinha", name: "Swiss Heat Bolinha", description: "Brazilian base. Swiss melt.", image: "", category: "Signature" },
      { id: "urban-kibe", name: "Urban Kibe", description: "Firm texture. Controlled spice.", image: "", category: "Signature" },
      { id: "rua-rissois", name: "Rua Rissois", description: "Swiss meat. Street crisp format.", image: "", category: "Signature" },
      { id: "pao-237", name: "Pão 237", description: "Traditional cheese bread.", image: "", category: "Classiques" },
      { id: "empada-237", name: "237 Empada", description: "Chicken empada. Classic recipe.", image: "", category: "Classiques" },
      { id: "bacalhau-drop", name: "Bacalhau Drop", description: "Codfish fritter. Crisp and golden.", image: "", category: "Classiques" },
      { id: "237-feast", name: "The 237 Feast — 100 Bites", description: "Signature event box. Structured selection. Built for sharing.", image: "", category: "Event" },
      { id: "coxinha-spicy", name: "Coxinha Spicy Edition", description: "Signature heat. Controlled spice.", image: "", category: "Limited Drops" },
      { id: "kibe-cheese", name: "Kibe Cheese Fusion", description: "Crisp outside. Melted center.", image: "", category: "Limited Drops" },
      { id: "urban-pizza", name: "Urban Pizza Bolinha", description: "Brazilian base. Italian-inspired filling.", image: "", category: "Limited Drops" },
    ],
    limitedDrops: [],
  },
  en: {
    brand: {
      slogan: "Brazilian Bites, Elevated.",
      heroText: "Urban. Structured. Precise.",
      aboutTitle: "The Concept",
      aboutText: "Rua 237 redefines Brazilian street food through structure and precision.\n\nBuilt on strong foundations.\nRefined for the modern street.\n\nBrazilian bites, elevated.",
      aboutHighlight: "Precision. Structure. Heat.",
    },
    ui: {
      discover: "Explore the Menu",
      contact: "Contact",
      allCategories: "All",
      ctaTitle: "Start your 237 order.",
      ctaText: "For events, private orders and collaborations.",
      ctaButton: "Contact",
      contactTitle: "Contact",
      namePlaceholder: "Your name",
      phonePlaceholder: "Your phone number",
      messagePlaceholder: "Your message...",
      sendEmail: "Send email",
      whatsapp: "Chat on WhatsApp",
      instagram: "Follow on Instagram",
      footerText: "\u00a9 2026 Rua 237. All rights reserved.",
      catalogTitle: "The Menu",
      limitedDropsTitle: "Limited Drops",
      limitedDropsText: "Available this week only.\nLimited quantities.",
      limitedDropsBanner: "Limited Drops",
      limitedDropsBannerText: "Produced in limited batches.\nPre-order only.",
      signatureSeriesTitle: "Signature Series",
    },
    categories: ["Signature", "Classics", "Event", "Limited Drops"],
    products: [
      { id: "coxinha-237", name: "237 Coxinha", description: "Crisp shell. Slow-cooked chicken.", image: "", category: "Signature" },
      { id: "swiss-heat-bolinha", name: "Swiss Heat Bolinha", description: "Brazilian base. Swiss melt.", image: "", category: "Signature" },
      { id: "urban-kibe", name: "Urban Kibe", description: "Firm texture. Controlled spice.", image: "", category: "Signature" },
      { id: "rua-rissois", name: "Rua Rissois", description: "Swiss meat. Street crisp format.", image: "", category: "Signature" },
      { id: "pao-237", name: "Pão 237", description: "Traditional cheese bread.", image: "", category: "Classics" },
      { id: "empada-237", name: "237 Empada", description: "Chicken empada. Classic recipe.", image: "", category: "Classics" },
      { id: "bacalhau-drop", name: "Bacalhau Drop", description: "Codfish fritter. Crisp and golden.", image: "", category: "Classics" },
      { id: "237-feast", name: "The 237 Feast — 100 Bites", description: "Signature event box. Structured selection. Built for sharing.", image: "", category: "Event" },
      { id: "coxinha-spicy", name: "Coxinha Spicy Edition", description: "Signature heat. Controlled spice.", image: "", category: "Limited Drops" },
      { id: "kibe-cheese", name: "Kibe Cheese Fusion", description: "Crisp outside. Melted center.", image: "", category: "Limited Drops" },
      { id: "urban-pizza", name: "Urban Pizza Bolinha", description: "Brazilian base. Italian-inspired filling.", image: "", category: "Limited Drops" },
    ],
    limitedDrops: [],
  },
  pt: {
    brand: {
      slogan: "Brazilian Bites, Elevated.",
      heroText: "Urban. Structured. Precise.",
      aboutTitle: "O Conceito",
      aboutText: "Rua 237 redefine a comida de rua brasileira com estrutura e precis\u00e3o.\n\nConstru\u00eddo sobre bases s\u00f3lidas.\nRefinado para a rua moderna.\n\nBrazilian bites, elevated.",
      aboutHighlight: "Precis\u00e3o. Estrutura. Intensidade.",
    },
    ui: {
      discover: "Explore the Menu",
      contact: "Contato",
      allCategories: "Todos",
      ctaTitle: "Start your 237 order.",
      ctaText: "Para eventos, encomendas e parcerias.",
      ctaButton: "Contato",
      contactTitle: "Contato",
      namePlaceholder: "Seu nome",
      phonePlaceholder: "Seu numéro de telefone",
      messagePlaceholder: "Sua mensagem...",
      sendEmail: "Enviar por email",
      whatsapp: "Falar pelo WhatsApp",
      instagram: "Siga no Instagram",
      footerText: "\u00a9 2026 Rua 237. Todos os direitos reservados.",
      catalogTitle: "O Card\u00e1pio",
      limitedDropsTitle: "Limited Drops",
      limitedDropsText: "Dispon\u00edvel somente esta semana.\nQuantidades limitadas.",
      limitedDropsBanner: "Limited Drops",
      limitedDropsBannerText: "Produzido em lotes limitados.\nSomente sob encomenda.",
      signatureSeriesTitle: "Signature Series",
    },
    categories: ["Signature", "Clássicos", "Evento", "Limited Drops"],
    products: [
      { id: "coxinha-237", name: "237 Coxinha", description: "Casca crocante. Frango desfiado.", image: "", category: "Signature" },
      { id: "swiss-heat-bolinha", name: "Swiss Heat Bolinha", description: "Base brasileira. Derretido suíço.", image: "", category: "Signature" },
      { id: "urban-kibe", name: "Urban Kibe", description: "Textura firme. Especiarias controladas.", image: "", category: "Signature" },
      { id: "rua-rissois", name: "Rua Rissois", description: "Carne suíça. Formato crocante de rua.", image: "", category: "Signature" },
      { id: "pao-237", name: "Pão 237", description: "Pão de queijo tradicional.", image: "", category: "Clássicos" },
      { id: "empada-237", name: "237 Empada", description: "Empada de frango. Receita clássica.", image: "", category: "Clássicos" },
      { id: "bacalhau-drop", name: "Bacalhau Drop", description: "Bolinho de bacalhau. Crocante e dourado.", image: "", category: "Clássicos" },
      { id: "237-feast", name: "The 237 Feast — 100 Bites", description: "Box signature para eventos. Seleção estruturada. Feito para compartilhar.", image: "", category: "Evento" },
      { id: "coxinha-spicy", name: "Coxinha Spicy Edition", description: "Calor signature. Especiarias controladas.", image: "", category: "Limited Drops" },
      { id: "kibe-cheese", name: "Kibe Cheese Fusion", description: "Crocante por fora. Derretido por dentro.", image: "", category: "Limited Drops" },
      { id: "urban-pizza", name: "Urban Pizza Bolinha", description: "Base brasileira. Recheio italiano.", image: "", category: "Limited Drops" },
    ],
    limitedDrops: [],
  },
};
export default data;
