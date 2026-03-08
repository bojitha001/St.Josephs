import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";

const schoolLogo = "/LOGO.jpg";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Academics", path: "/academics" },
  { label: "Student Life", path: "/student-life" },
  { label: "News & Media", path: "/news" },
  { label: "Admissions", path: "/admissions" },
  { label: "Contact", path: "/contact" },
  { label: "Digital Access", path: "/digital-access" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between py-1.5 text-xs">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> +94 11 2930 XXX</span>
            <span className="hidden sm:flex items-center gap-1"><Mail className="h-3 w-3" /> info@sjcwattala.lk</span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/digital-access" className="hover:text-gold transition-colors">Student Portal</Link>
            <span className="opacity-40">|</span>
            <Link to="/digital-access" className="hover:text-gold transition-colors">Staff Portal</Link>
          </div>
        </div>
      </div>

      <nav className="bg-card/95 backdrop-blur-md border-b shadow-sm">
        <div className="container flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={schoolLogo} alt="St. Joseph's College Logo" className="h-12 w-12 object-contain rounded-full" />
            <div>
              <h1 className="font-heading text-lg font-bold text-primary leading-tight">St. Joseph's College</h1>
              <p className="text-xs text-muted-foreground">Wattala, Sri Lanka</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-primary">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden border-t bg-card pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-6 py-3 text-sm ${location.pathname === item.path ? "text-primary font-semibold bg-secondary" : "text-muted-foreground hover:bg-secondary"}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;