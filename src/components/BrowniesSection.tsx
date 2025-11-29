import BakesCard from './BakesCard';
import browniesImg from '@/assets/brownies.jpg';
import muffinsImg from '@/assets/muffins.jpg';
import cakesImg from '@/assets/cakes.jpg';

const BrowniesSection = () => {
  const browniesData = {
    title: 'Brownies',
    description: 'Ragi & Multimillet Brownies in 3 delicious varieties:',
    items: [
      'Classic Brownie',
      'Nuts Brownie',
      'Dark Chocolate Ganache Brownie',
    ],
    image: browniesImg,
    ingredients: ['Ragi flour', 'Multi millet flour', 'Dark chocolate', 'Jaggery', 'Butter', 'Eggs'],
    healthBenefits: ['High in calcium from ragi', 'Rich in antioxidants', 'Made with millets for better nutrition', 'Natural sweetness from jaggery']
  };

  const muffinsData = {
    title: 'Muffins',
    items: [
      'Carrot Muffins',
      'ABC Muffins',
      'Choco Muffins',
      'Ragi Muffins',
    ],
    image: muffinsImg,
    ingredients: ['Wheat flour', 'Carrots/Fruits', 'Ragi flour', 'Honey', 'Eggs', 'Baking powder'],
    healthBenefits: ['Packed with vitamins & minerals', 'Fiber-rich from vegetables', 'Natural ingredients', 'Perfect for breakfast or snacks']
  };

  const cakesData = {
    title: 'Cakes & Special Bakes',
    items: [
      'Spongy Tea Cake',
      'Travel Wheat Cake',
      'Korean Cheese Bun',
      'Cup Cakes for birthdays and special occasions',
    ],
    image: cakesImg,
    ingredients: ['Wheat flour', 'Butter', 'Eggs', 'Natural flavors', 'Cream cheese', 'Fresh fruits'],
    healthBenefits: ['Made fresh on order', 'Customizable for occasions', 'No artificial preservatives', 'Perfect for celebrations']
  };

  return (
    <section id="brownies" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Brownies & Bakes
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <BakesCard {...browniesData} />
          <BakesCard {...muffinsData} />
          <BakesCard {...cakesData} />
        </div>
      </div>
    </section>
  );
};

export default BrowniesSection;
