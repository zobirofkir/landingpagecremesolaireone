
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-xl mb-2">Home</h3>
            <p className="text-white/70 text-sm max-w-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean urna, viverra quis odio dolor vitae lectus diam.</p>
          </div>
          
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-xl mb-2">Services</h3>
            <p className="text-white/70 text-sm max-w-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean urna, viverra quis odio dolor vitae lectus diam.</p>
          </div>
          
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-xl mb-2">Resources</h3>
            <p className="text-white/70 text-sm max-w-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean urna, viverra quis odio dolor vitae lectus diam.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-2">About</h3>
            <p className="text-white/70 text-sm max-w-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean urna, viverra quis odio dolor vitae lectus diam.</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between pt-8 border-t border-white/20">
          <p className="text-white/70 text-sm mb-4 md:mb-0">&copy; 2025 Beauty Products. All rights reserved.</p>
          
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-white/80 transition-colors">
              <Facebook size={18} />
            </Link>
            <Link to="/" className="hover:text-white/80 transition-colors">
              <Twitter size={18} />
            </Link>
            <Link to="/" className="hover:text-white/80 transition-colors">
              <Linkedin size={18} />
            </Link>
            <Link to="/" className="hover:text-white/80 transition-colors">
              <Instagram size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
