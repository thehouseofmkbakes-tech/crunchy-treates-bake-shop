import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  name: string;
  price?: string | number;
  variant?: 'default' | 'premium' | 'healthier';
  image?: string;
}

const ProductCard = ({ name, price, variant = 'default', image }: ProductCardProps) => {
  const displayPrice = price 
    ? typeof price === 'number' 
      ? `₹${price}` 
      : price 
    : 'Price on request';

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden">
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
      </CardContent>
    </Card>
  );
};

export default ProductCard;
