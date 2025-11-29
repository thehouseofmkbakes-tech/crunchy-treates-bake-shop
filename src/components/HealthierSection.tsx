import ProductCard from './ProductCard';

const HealthierSection = () => {
  const healthierProducts = [
    { name: 'Jowar Cookies', price: 'Price on request' },
    { name: 'Multi Millet Cookies', price: 150 },
    { name: 'Ragi Cookies', price: 150 },
    { name: 'Foxtail Millet (Thenai) Cookies', price: 160 },
    { name: 'Pearl Millet (Kambu) Jeera Sweet & Spicy Cookies', price: 150 },
  ];

  return (
    <section id="healthier" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Healthier Range
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Made with millets and better ingredients, without compromising on taste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthierProducts.map((product) => (
            <ProductCard 
              key={product.name}
              name={product.name}
              price={product.price}
              variant="healthier"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthierSection;
