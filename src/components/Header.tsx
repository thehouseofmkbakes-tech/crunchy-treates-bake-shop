import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img 
              src={logo} 
              alt="Crunchy Treates Logo" 
              className="h-16 md:h-20 w-auto"
            />
          </button>
          
          <nav className="hidden lg:flex items-center gap-6">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary"
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('premium')}
              className="text-foreground hover:text-primary"
            >
              Premium Delight
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('healthier')}
              className="text-foreground hover:text-primary"
            >
              Healthier Range
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('brownies')}
              className="text-foreground hover:text-primary"
            >
              Brownies & Bakes
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('why-us')}
              className="text-foreground hover:text-primary"
            >
              Why Choose Us
            </Button>
            <Button 
              onClick={() => scrollToSection('order')}
              className="bg-primary text-primary-foreground hover:bg-accent"
            >
              Order Now
            </Button>
          </nav>

          <Button 
            onClick={() => scrollToSection('order')}
            className="lg:hidden bg-primary text-primary-foreground hover:bg-accent"
          >
            Order
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
