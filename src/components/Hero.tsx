import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/hero-bakery.jpg';

const Hero = () => {
  const scrollToOrder = () => {
    const element = document.getElementById('order');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-32 md:py-40 text-center">
        <Badge 
          className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm"
        >
          Free delivery for orders above 1 kg
        </Badge>
        
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
          Crunchy Treates
        </h2>
        
        <p className="text-xl md:text-2xl font-display text-foreground mb-4">
          100% Homemade Goodness from The House of MKBakes
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Fresh, Maida-free cookies, brownies, muffins and more – baked with care for your loved ones.
        </p>
        
        <Button 
          onClick={scrollToOrder}
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-accent text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
        >
          Order Now
        </Button>
      </div>
    </section>
  );
};

export default Hero;
