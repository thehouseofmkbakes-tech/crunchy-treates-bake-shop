import ProductCard from './ProductCard';
import milletCookies from '@/assets/millet-cookies.jpg';

const HealthierSection = () => {
  const healthierProducts = [
    { 
      name: 'Jowar Cookies', 
      price: 'Price on request', 
      image: milletCookies,
      ingredients: ['Jowar flour', 'Jaggery', 'Ghee', 'Cardamom'],
      healthBenefits: ['Gluten-free option', 'High in protein & fiber', 'Helps maintain blood sugar levels']
    },
    { 
      name: 'Multi Millet Cookies', 
      price: 150, 
      image: milletCookies,
      ingredients: ['Ragi', 'Jowar', 'Bajra', 'Foxtail millet', 'Jaggery', 'Ghee'],
      healthBenefits: ['Rich in calcium & iron', 'Complete protein source', 'Boosts immunity']
    },
    { 
      name: 'Ragi Cookies', 
      price: 150, 
      image: milletCookies,
      ingredients: ['Ragi flour', 'Jaggery', 'Ghee', 'Sesame seeds'],
      healthBenefits: ['High in calcium', 'Good for bone health', 'Natural relaxant']
    },
    { 
      name: 'Foxtail Millet (Thenai) Cookies', 
      price: 160, 
      image: milletCookies,
      ingredients: ['Foxtail millet flour', 'Honey', 'Coconut oil', 'Nuts'],
      healthBenefits: ['Balances blood sugar', 'Rich in antioxidants', 'Promotes heart health']
    },
    { 
      name: 'Pearl Millet (Kambu) Jeera Sweet & Spicy Cookies', 
      price: 150, 
      image: milletCookies,
      ingredients: ['Pearl millet flour', 'Cumin seeds', 'Jaggery', 'Chili flakes', 'Ghee'],
      healthBenefits: ['Keeps you warm', 'Aids digestion', 'Rich in magnesium']
    },
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
              image={product.image}
              ingredients={product.ingredients}
              healthBenefits={product.healthBenefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthierSection;
