import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Instagram } from 'lucide-react';
import { toast } from 'sonner';

const OrderSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    items: '',
    deliveryDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! We will contact you soon to confirm your order.');
    setFormData({ name: '', phone: '', items: '', deliveryDate: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="order" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Order Now
          </h2>
          <p className="text-lg text-primary font-semibold">
            Free delivery for orders more than 1 kg
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call / WhatsApp</p>
                      <a 
                        href="tel:9597927479"
                        className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        95979 27479
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Follow us on Instagram</p>
                      <a 
                        href="https://instagram.com/home.made_biscuit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        @home.made_biscuit
                      </a>
                    </div>
                  </div>

                  <Button 
                    asChild
                    className="w-full bg-primary text-primary-foreground hover:bg-accent mt-6"
                    size="lg"
                  >
                    <a 
                      href="https://instagram.com/home.made_biscuit"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="w-5 h-5 mr-2" />
                      Follow us on Instagram
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Form */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
                Order Enquiry Form
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <Label htmlFor="items">Items & Quantity</Label>
                  <Textarea
                    id="items"
                    name="items"
                    value={formData.items}
                    onChange={handleChange}
                    required
                    className="mt-2 min-h-[120px]"
                    placeholder="Please specify the items and quantities you'd like to order"
                  />
                </div>

                <div>
                  <Label htmlFor="deliveryDate">Preferred Delivery Date/Time</Label>
                  <Input
                    id="deliveryDate"
                    name="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="e.g., Tomorrow 2 PM"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-accent"
                  size="lg"
                >
                  Submit Order Enquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
