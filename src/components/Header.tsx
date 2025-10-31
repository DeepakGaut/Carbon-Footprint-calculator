import logo from "@/assets/iitkgp-logo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto max-w-7xl px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="IIT Kharagpur Logo" className="h-12 w-12" />
            <div>
              <h1 className="text-lg font-bold text-foreground">IIT Kharagpur</h1>
              <p className="text-sm text-muted-foreground">Carbon Footprint Calculator</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#calculator" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Calculator
            </a>
            <a href="#footer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
