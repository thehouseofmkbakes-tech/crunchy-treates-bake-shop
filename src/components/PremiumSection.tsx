import ProductCard from './ProductCard';

const PremiumSection = () => {
  const premiumProducts = [
    { name: 'Jeera Cookies', price: 100 },
    { name: 'Karachi Cookies', price: 100 },
    { name: 'Ghee Biscuit', price: 120 },
  ];

  const nuttyProducts = [
    { name: 'Nut Cookies', price: 150 },
    { name: 'Ghee Nutty Cookies', price: 150 },
    { name: 'Choco Chips Cookies', price: 150 },
  ];

  return (
    <section id="premium" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Premium Delight
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our classic, all-time favourite cookies for every occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {premiumProducts.map((product) => (
            <ProductCard 
              key={product.name}
              name={product.name}
              price={product.price}
              variant="premium"
            />
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground text-center mb-8">
            Nutty Goodness
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nuttyProducts.map((product) => (
              <ProductCard 
                key={product.name}
                name={product.name}
                price={product.price}
                variant="premium"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumSection;
