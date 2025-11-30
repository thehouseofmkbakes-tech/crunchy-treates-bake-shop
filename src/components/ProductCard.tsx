import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  name: string;
  price?: string | number;
  variant?: 'default' | 'premium' | 'healthier';
  image?: string;
  ingredients?: string[];
  healthBenefits?: string[];
}

const ProductCard = ({ name, price, variant = 'default', image, ingredients, healthBenefits }: ProductCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const displayPrice = price 
    ? typeof price === 'number' 
      ? `₹${price}` 
      : price 
    : 'Price on request';

  return (
    <div 
      className="relative h-full cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`relative w-full min-h-[360px] transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of card */}
        <Card className="absolute inset-0 backface-hidden group hover:shadow-lg transition-all duration-300 border-border/50 overflow-hidden">
          {image && (
            <div className="aspect-square overflow-hidden">
              <img 
                src={image} 
                alt={name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className={`text-xl font-bold ${
              price ? 'text-primary' : 'text-muted-foreground text-sm'
            }`}>
              {displayPrice}
            </p>
            <p className="text-xs text-muted-foreground mt-2">Click to see details</p>
          </CardContent>
        </Card>

        {/* Back of card */}
        <Card className="absolute inset-0 backface-hidden rotate-y-180 bg-card/95 backdrop-blur-sm border-primary/20 overflow-hidden">
          <CardContent className="p-6 h-full flex flex-col justify-center">
            <h3 className="text-lg font-display font-bold text-primary mb-4 text-center">
              {name}
            </h3>
            
            {ingredients && ingredients.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-foreground mb-2">Ingredients:</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {ingredients.map((ingredient, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-1">•</span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {healthBenefits && healthBenefits.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Health Benefits:</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {healthBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-1">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <p className="text-xs text-muted-foreground mt-4 text-center">Click to flip back</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductCard;
