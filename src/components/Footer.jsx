import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

const schoolLogo = "/LOGO.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={schoolLogo} alt="St. Joseph's College Logo" className="h-12 w-12 object-contain rounded-full" />
              <div>
                <h3 className="font-heading text-lg font-bold">St. Joseph's College</h3>
                <p className="text-sm opacity-70">Wattala, Sri Lanka</p>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              A premier Catholic educational institution dedicated to nurturing young minds in faith, knowledge, and character since its founding.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-accent-foreground transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-accent-foreground transition-colors"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-accent-foreground transition-colors"><Youtube className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-base font-semibold mb-4 gold-accent">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="hover:text-gold transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-gold transition-colors">Admissions</Link></li>
              <li><Link to="/student-life" className="hover:text-gold transition-colors">Student Life</Link></li>
              <li><Link to="/news" className="hover:text-gold transition-colors">News & Events</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-base font-semibold mb-4 gold-accent">Portals</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/digital-access" className="hover:text-gold transition-colors">Student Portal</Link></li>
              <li><Link to="/digital-access" className="hover:text-gold transition-colors">Staff Portal</Link></li>
              <li><Link to="/digital-access" className="hover:text-gold transition-colors">E-Learning / LMS</Link></li>
              <li><Link to="/digital-access" className="hover:text-gold transition-colors">Alumni Association</Link></li>
              <li><Link to="/digital-access" className="hover:text-gold transition-colors">PTA</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-base font-semibold mb-4 gold-accent">Contact Us</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> St. Joseph's College, Wattala, Sri Lanka</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /> +94 11 2930 XXX</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /> info@sjcwattala.lk</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container py-4 text-center text-xs opacity-50">
          © {new Date().getFullYear()} St. Joseph's College, Wattala. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;