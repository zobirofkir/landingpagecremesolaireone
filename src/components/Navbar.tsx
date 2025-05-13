import { motion } from "framer-motion";
import { Menu, Search, ShoppingCart, UserRound, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Product");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", path: "#" },
    { name: "Abouts", path: "#abouts" },
    { name: "Products", path: "#products" },
  ];

  return (
    <>
      <motion.nav
        className={`w-full py-4 px-4 md:px-8 flex items-center justify-between fixed top-0 left-0 z-50 backdrop-blur-md bg-white/90 dark:bg-background/90 border-b border-border transition-all duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-teal-400 flex items-center justify-center shadow-lg shadow-primary/20">
              <div className="w-5 h-5 rounded-full bg-white"></div>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent hidden sm:block">
              Stellar
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 relative group ${
                activeLink === link.name
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary"
              }`}
              onClick={() => setActiveLink(link.name)}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ${
                  activeLink === link.name ? "scale-x-100" : ""
                }`}
              ></span>
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          <button
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-foreground/70 hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
          <button className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
            Get Started
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 bg-background/95 backdrop-blur-md z-[60] flex flex-col p-6 ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-teal-400 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-white"></div>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">
              Stellar
            </span>
          </div>
          <button
            className="w-9 h-9 rounded-full flex items-center justify-center text-foreground/70 hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-4 py-3 rounded-md text-base font-medium transition-all ${
                activeLink === link.name
                  ? "bg-muted text-primary"
                  : "text-foreground/80 hover:bg-muted/50"
              }`}
              onClick={() => {
                setActiveLink(link.name);
                setMobileMenuOpen(false);
              }}
            >
              {link.name}
            </Link>
          ))}
          <button className="mt-4 bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-md text-base font-medium transition-colors">
            Get Started
          </button>
        </div>
        
      </motion.div>
    </>
  );
};

export default Navbar;