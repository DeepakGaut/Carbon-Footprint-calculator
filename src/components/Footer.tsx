import { Leaf } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-foreground">IIT Kharagpur</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Carbon Footprint Calculator - Empowering the IIT KGP community to understand and reduce their environmental impact for a sustainable future.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#calculator" className="text-muted-foreground hover:text-primary transition-colors">
                  Calculator
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <p className="text-muted-foreground text-sm mb-2">
              Email: carbon@iitkgp.ac.in
            </p>
            <p className="text-muted-foreground text-sm">
              Centre for Climate Change - IIT Kharagpur
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} IIT Kharagpur - Carbon Footprint Calculator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
