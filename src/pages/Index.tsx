import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PremiumSection from '@/components/PremiumSection';
import HealthierSection from '@/components/HealthierSection';
import BrowniesSection from '@/components/BrowniesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import OrderSection from '@/components/OrderSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PremiumSection />
      <HealthierSection />
      <BrowniesSection />
      <WhyChooseUs />
      <OrderSection />
      <Footer />
    </div>
  );
};

export default Index;
