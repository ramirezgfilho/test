import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import boxImg from "@/assets/box.png";
import swissHeatImg from "@/assets/swiss-heat-bolinha.png";

import coxinhaImg from "@/assets/coxinha.png";
import urbanKibeImg from "@/assets/urban-kibe.png";
import coxinhaSpicyImg from "@/assets/coxinha-spicy.png";
import paoImg from "@/assets/pao-de-queijo.png";
import empadaImg from "@/assets/empada.png";
import kibeCheeseImg from "@/assets/kibe-cheese-v3.png";
import acaiImg from "@/assets/acai.png";
import limonadaImg from "@/assets/limonada.png";
import urbanPizzaImg from "@/assets/urban-pizza.png";

const imageMap: Record<string, string> = {
  "coxinha-237": coxinhaImg,
  "urban-kibe": urbanKibeImg,
  "swiss-heat-bolinha": swissHeatImg,
  "rua-rissois": limonadaImg,
  "empada-237": empadaImg,
  "pao-237": paoImg,
  "bacalhau-drop": acaiImg,
  "237-feast": boxImg,
  "empada-237-ltd": empadaImg,
  "pao-237-ltd": paoImg,
  "bacalhau-drop-ltd": acaiImg,
  "coxinha-spicy": coxinhaSpicyImg,
  "kibe-cheese": kibeCheeseImg,
  "urban-pizza": urbanPizzaImg,
};

const LIMITED_DROPS_EXCLUSIVE = ["coxinha-spicy", "kibe-cheese", "urban-pizza"];

const Catalog = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? t.products.filter((p) => p.category === activeCategory)
    : t.products.filter((p) => !LIMITED_DROPS_EXCLUSIVE.includes(p.id));

  return (
    <section id="menu" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary font-body text-xs font-semibold tracking-[0.35em] uppercase text-center mb-3">
          {t.ui.signatureSeriesTitle}
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground text-center mb-10">
          {t.ui.catalogTitle}
        </h2>

        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 text-sm font-medium rounded-sm transition-colors ${
              activeCategory === null
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.ui.allCategories}
          </button>
          {t.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-sm transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => {
            const isEvent = product.id === "237-feast";
            return (
              <div
                key={product.id}
                className={`group bg-card rounded-lg overflow-hidden border transition-colors ${
                  isEvent
                    ? "border-primary/60 sm:col-span-2 lg:col-span-3"
                    : "border-border hover:border-primary/40"
                }`}
              >
                {isEvent ? (
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 aspect-square md:aspect-auto overflow-hidden">
                      <img
                        src={imageMap[product.id]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                      <span className="text-primary font-body text-xs font-semibold uppercase tracking-widest mb-2">
                        🔥 {product.category}
                      </span>
                      <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-lg">
                        {product.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={imageMap[product.id]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {product.name}
                        </h3>
                        {product.price && (
                          <span className="text-primary font-body text-sm font-semibold whitespace-nowrap">
                            {product.price}
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground font-body text-sm leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
