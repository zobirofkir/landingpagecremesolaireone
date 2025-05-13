
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col md:flex-row py-8 px-4 md:px-8">
      {/* Text Content */}
      <motion.div 
        className="w-full md:w-1/2 flex flex-col justify-center"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p 
          className="text-brand-green text-sm font-medium mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Unlock Your Skin's Natural
        </motion.p>
        
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Make <span className="text-brand-green">Sure Your</span> <br />
          <span className="text-brand-green">Makeup</span> Products.
        </motion.h1>
        
        <motion.p 
          className="text-gray-600 text-sm mb-6 max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Discover 100% Vegetarian Beauty Products In World Wide, For Hair Skin And Cruelty Free Beauty Products. Buy Face, Body, Hair Care, Makeup Products Like Red Like Their Beauty Part
        </motion.p>
        
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-medium mb-2">Price</p>
          <p className="text-xl font-semibold">$68.48</p>
        </motion.div>
        
        <motion.div 
          className="flex space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button className="bg-brand-green hover:bg-brand-green/90 text-white rounded-full px-6">
            Shop Now
          </Button>
          <Button variant="outline" className="rounded-full px-6 border-gray-300 hover:bg-gray-50">
            Learn More
          </Button>
        </motion.div>
        
        <motion.div
          className="mt-8 p-4 bg-gray-50 rounded-lg max-w-sm border border-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-sm font-medium mb-1">30% OFFER</p>
          <p className="text-xs text-gray-500">Get Discount for All Products in Your First Order</p>
          <div className="mt-2">
            <Button size="sm" className="bg-brand-green hover:bg-brand-green/90 text-white rounded-full text-xs px-4 py-1">
              Get It
            </Button>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Hero Image */}
      <motion.div 
        className="w-full md:w-1/2 relative mt-12 md:mt-0"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="h-full flex items-center justify-center relative">
          <div className="absolute w-full h-full bg-brand-lightGreen rounded-full blur-3xl opacity-20 z-0"></div>
          <img 
            src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
            alt="Skin care products" 
            className="relative z-10 max-h-[500px] object-contain"
          />
          
          {/* Floating elements */}
          <motion.div
            className="absolute top-20 left-10 bg-white p-3 rounded-md shadow-md z-20"
            animate={{ y: [0, -10, 0], transition: { repeat: Infinity, duration: 3 } }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-green-200 to-green-400 rounded-md flex items-center justify-center">
              <span className="text-white text-xl">📦</span>
            </div>
          </motion.div>
          
          <motion.div
            className="absolute bottom-40 right-20 bg-white p-3 rounded-full shadow-md z-20 hidden md:block"
            animate={{ y: [0, 10, 0], transition: { repeat: Infinity, duration: 2.5 } }}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-amber-300 flex items-center justify-center">
              <span className="text-2xl">✨</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
