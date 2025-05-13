import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone, Sun, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-amber-50 to-amber-100/50 pt-16 pb-8 px-4 md:px-8 lg:px-12 text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-16 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h3 className="font-bold text-2xl mb-2">Join Our Newsletter</h3>
            <p className="text-gray-600">Get sun protection tips and exclusive offers delivered to your inbox.</p>
          </div>
          <div className="w-full md:w-auto flex-1 flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-l-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-r-full transition-colors flex items-center justify-center">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-teal-400 flex items-center justify-center shadow-md">
                <div className="w-5 h-5 rounded-full bg-white"></div>
              </div>
              <span className="text-xl font-bold">Stellar</span>
            </div>
            <p className="text-gray-600 mb-6">
              Premium sun protection formulated with advanced ingredients to shield your skin from harmful UV rays while nourishing and hydrating.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"><Sun size={16} /> Sun Protection</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"><Shield size={16} /> Skin Health</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-600 hover:text-primary transition-colors">Products</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-3">
              <li><Link to="/faq" className="text-gray-600 hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link to="/shipping" className="text-gray-600 hover:text-primary transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/track-order" className="text-gray-600 hover:text-primary transition-colors">Track Your Order</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span className="text-gray-600">123 Sunshine Boulevard, Coastal City, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span className="text-gray-600">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <span className="text-gray-600">contact@stellarsuncare.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            <img src="https://cdn-icons-png.flaticon.com/128/196/196578.png" alt="Visa" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://cdn-icons-png.flaticon.com/128/196/196561.png" alt="Mastercard" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://cdn-icons-png.flaticon.com/128/196/196565.png" alt="PayPal" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968299.png" alt="Apple Pay" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          </div>
          
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Stellar Sun Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;