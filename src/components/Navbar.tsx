
import { motion } from "framer-motion";
import { Search, ShoppingCart, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.nav 
      className="w-full py-6 px-8 flex items-center justify-between"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center">
        <div className="w-8 h-8 mr-2 rounded-full bg-gradient-to-r from-green-400 to-teal-400 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-white"></div>
        </div>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className="text-sm font-medium hover:text-brand-green transition-colors">Product</Link>
        <Link to="/" className="text-sm font-medium hover:text-brand-green transition-colors">Features</Link>
        <Link to="/" className="text-sm font-medium hover:text-brand-green transition-colors">Reviews</Link>
        <Link to="/" className="text-sm font-medium hover:text-brand-green transition-colors">About Us</Link>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-1 hover:text-brand-green transition-colors">
          <Search size={20} />
        </button>
        <button className="p-1 hover:text-brand-green transition-colors">
          <UserRound size={20} />
        </button>
        <button className="p-1 hover:text-brand-green transition-colors">
          <ShoppingCart size={20} />
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
