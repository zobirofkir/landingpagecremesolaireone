import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, ShieldCheck, Droplet, Sun } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="w-full min-h-screen pt-24 pb-16 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-amber-50/50 to-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Text Content */}
        <motion.div 
          className="w-full md:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex items-center gap-2 mb-4 bg-amber-100/60 w-fit px-3 py-1.5 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sun size={16} className="text-amber-600" />
            <span className="text-amber-800 text-sm font-medium">SPF 50+ Protection</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Advanced <span className="text-primary">UV Defense</span> <br />
            <span className="text-primary">Crème Solaire</span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-600 text-base mb-8 max-w-md leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Our lightweight, non-greasy formula provides superior broad-spectrum protection against harmful UVA/UVB rays while nourishing your skin with antioxidants and hydrating ingredients.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <ShieldCheck size={20} className="text-primary" />
              </div>
              <span className="text-sm font-medium">Dermatologist Tested</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Droplet size={20} className="text-primary" />
              </div>
              <span className="text-sm font-medium">Water Resistant</span>
            </div>
          </motion.div>
          
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-600">4.9/5 (2.3k reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold">$68.48</p>
              <p className="text-sm text-gray-500 line-through">$89.99</p>
              <span className="bg-red-100 text-red-600 text-xs font-medium px-2 py-0.5 rounded">-24%</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-base">
              Shop Now
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-6 border-gray-300 hover:bg-gray-50 text-base">
              Learn More
            </Button>
          </motion.div>
          
          <motion.div
            className="mt-10 p-5 bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-2xl max-w-sm border border-amber-100 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="absolute -right-4 -top-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
            <p className="text-base font-semibold mb-1">LIMITED OFFER</p>
            <p className="text-sm text-gray-600">Get 30% off on your first purchase with code:</p>
            <div className="mt-3 bg-white px-4 py-2 rounded-lg border border-amber-200 font-mono font-medium text-center">
              SUNSHINE30
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
            {/* Background elements */}
            <div className="absolute w-[80%] h-[80%] bg-primary/10 rounded-full blur-3xl opacity-60 z-0"></div>
            <div className="absolute w-[40%] h-[40%] bg-amber-200/30 rounded-full blur-2xl opacity-70 z-0 -top-10 right-10"></div>
            
            {/* Main product image */}
            <motion.div
              className="relative z-10 w-full h-full flex items-center justify-center"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 1, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 6,
                ease: "easeInOut"
              }}
            >
              <img 
                src="https://media.istockphoto.com/id/491581184/fr/photo/p%C3%A8re-application-de-la-cr%C3%A8me-de-la-cr%C3%A8me-solaire-sur-l%C3%A9paule-filles.jpg?s=612x612&w=0&k=20&c=hgTkJ_J4V64AYxTVuKHJ7XsF755JG-fscZQbLbNcj_o=" 
                alt="Crème Solaire Sunscreen" 
                className="relative z-10 max-h-[550px] object-contain drop-shadow-2xl"
              />
            </motion.div>
            
            {/* Floating elements */}
            <motion.div
              className="absolute top-20 left-0 bg-white p-4 rounded-xl shadow-lg z-20"
              animate={{ y: [0, -15, 0], transition: { repeat: Infinity, duration: 4 } }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Droplet size={20} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-xs font-medium">Hydrating</p>
                  <p className="text-xs text-gray-500">Moisture Lock</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="absolute bottom-20 right-0 bg-white p-4 rounded-xl shadow-lg z-20 hidden md:block"
              animate={{ y: [0, 15, 0], transition: { repeat: Infinity, duration: 5 } }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <ShieldCheck size={20} className="text-amber-600" />
                </div>
                <div>
                  <p className="text-xs font-medium">Broad Spectrum</p>
                  <p className="text-xs text-gray-500">UVA/UVB Protection</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="absolute top-1/2 -right-4 md:right-10 bg-white p-3 rounded-full shadow-lg z-20"
              animate={{ 
                x: [0, 10, 0], 
                rotate: [0, 10, 0],
                transition: { repeat: Infinity, duration: 6 } 
              }}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-100 to-amber-300 flex items-center justify-center overflow-hidden">
                <Sun size={28} className="text-amber-600" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;