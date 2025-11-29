import { Check } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    '100% Home made with care',
    '0% Maida',
    'Fresh & Hygienic',
    'Customised & Assorted Cookies are also available',
  ];

  return (
    <section id="why-us" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground text-center mb-12">
            Why Choose Us?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div 
                key={feature}
                className="flex items-start gap-4 bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <p className="text-lg text-foreground font-medium pt-0.5">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
