import browniesImg from '@/assets/brownies.jpg';
import muffinsImg from '@/assets/muffins.jpg';
import cakesImg from '@/assets/cakes.jpg';

const BrowniesSection = () => {
  const brownies = [
    'Classic Brownie',
    'Nuts Brownie',
    'Dark Chocolate Ganache Brownie',
  ];

  const muffins = [
    'Carrot Muffins',
    'ABC Muffins',
    'Choco Muffins',
    'Ragi Muffins',
  ];

  const cakes = [
    'Spongy Tea Cake',
    'Travel Wheat Cake',
    'Korean Cheese Bun',
    'Cup Cakes for birthdays and special occasions',
  ];

  return (
    <section id="brownies" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Brownies & Bakes
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Brownies */}
          <div className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={browniesImg} 
                alt="Brownies"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                Brownies
              </h3>
              <p className="text-muted-foreground mb-6">
                Ragi & Multimillet Brownies in 3 delicious varieties:
              </p>
              <ul className="space-y-3">
                {brownies.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Muffins */}
          <div className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={muffinsImg} 
                alt="Muffins"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                Muffins
              </h3>
              <ul className="space-y-3">
                {muffins.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cakes & Special Bakes */}
          <div className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={cakesImg} 
                alt="Cakes and Special Bakes"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                Cakes & Special Bakes
              </h3>
              <ul className="space-y-3">
                {cakes.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowniesSection;
