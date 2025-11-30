import { Instagram } from 'lucide-react';

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
            {/* Inline minimal FSSAI mark */}
            <svg
              aria-hidden="true"
              width="28"
              height="28"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" fill="white" />
              <text x="50%" y="52%" textAnchor="middle" fontSize="18" fontWeight="700" fill="#116530">FSSAI</text>
            </svg>

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
