import { Instagram } from 'lucide-react';
import fssaiLogo from '@/assets/fssai.webp';

const Footer = () => {
  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-display font-bold text-foreground">
            Crunchy Treats
          </h3>
          <p className="text-muted-foreground">
            The House of MKBakes
          </p>
          <div className="flex flex-col items-center gap-2">
            <p className="text-foreground font-medium">
              Homemade. Fresh. Maida-free.
            </p>
            <a 
              href="https://instagram.com/home.made_biscuit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@home.made_biscuit</span>
            </a>
          </div>
          <p className="text-sm text-muted-foreground pt-6">
            © {new Date().getFullYear()} Crunchy Treats – The House of MKBakes. All rights reserved.
          </p>

          {/* FSSAI license block */}
          <div className="flex items-center justify-center gap-3 mt-4 text-xs text-muted-foreground">
            <img
              src={fssaiLogo}
              alt="FSSAI logo"
              width={28}
              height={28}
              className="flex-shrink-0 rounded-sm bg-white"
            />

            <div>
              <div className="leading-none">FSSAI License No: <strong className="text-foreground">22425420000641</strong></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
