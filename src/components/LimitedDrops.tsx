import { useLanguage } from "@/contexts/LanguageContext";
import empadaImg from "@/assets/empada.png";
import paoImg from "@/assets/pao-de-queijo.png";
import acaiImg from "@/assets/acai.png";

const limitedImageMap: Record<string, string> = {
  "empada-237-ltd": empadaImg,
  "pao-237-ltd": paoImg,
  "bacalhau-drop-ltd": acaiImg,
};

const LimitedDrops = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-body text-xs font-semibold tracking-[0.35em] uppercase mb-3">
            {t.ui.limitedDropsTitle}
          </p>
          <div className="font-body text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
            {t.ui.limitedDropsText}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.limitedDrops.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-lg overflow-hidden border border-primary/20 hover:border-primary/50 transition-colors"
            >
              {limitedImageMap[product.id] ? (
                <div className="aspect-square overflow-hidden">
                  <img
                    src={limitedImageMap[product.id]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="aspect-square bg-secondary flex items-center justify-center">
                  <span className="text-muted-foreground font-body text-xs tracking-widest uppercase">
                    Coming Soon
                  </span>
                </div>
              )}
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {product.name}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LimitedDrops;
