import { useState } from 'react';

interface BakesCardProps {
  title: string;
  description?: string;
  items: string[];
  image: string;
  ingredients?: string[];
  healthBenefits?: string[];
}

const BakesCard = ({ title, description, items, image, ingredients, healthBenefits }: BakesCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-full cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div className="aspect-[4/3] overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-display font-semibold text-primary mb-4">
              {title}
            </h3>
            {description && (
              <p className="text-muted-foreground mb-6">
                {description}
              </p>
            )}
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mt-4 text-center">Click to see details</p>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-card/95 backdrop-blur-sm rounded-2xl border-2 border-primary/20 overflow-hidden shadow-lg">
          <div className="p-8 h-full flex flex-col justify-center">
            <h3 className="text-2xl font-display font-bold text-primary mb-6 text-center">
              {title}
            </h3>
            
            {ingredients && ingredients.length > 0 && (
              <div className="mb-6">
                <h4 className="text-base font-semibold text-foreground mb-3">Ingredients:</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {ingredients.map((ingredient, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {healthBenefits && healthBenefits.length > 0 && (
              <div>
                <h4 className="text-base font-semibold text-foreground mb-3">Health Benefits:</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {healthBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <p className="text-xs text-muted-foreground mt-6 text-center">Click to flip back</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BakesCard;
