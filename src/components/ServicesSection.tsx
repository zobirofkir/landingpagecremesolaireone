import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { ShieldCheck, Sun, Droplet, Leaf, Clock, Award } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-white to-amber-50/30" id="abouts">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-3 px-4 py-1.5 bg-amber-100/60 rounded-full text-amber-800 text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Benefits
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary">Advanced</span> Sun Protection
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our premium sunscreen formulas combine cutting-edge technology with natural ingredients to provide superior protection against harmful UV rays while nourishing your skin.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Broad Spectrum Protection"
            description="Our advanced formula shields your skin from both UVA and UVB rays, preventing sunburn, premature aging, and reducing the risk of skin cancer."
            icon={<ShieldCheck className="w-7 h-7 text-primary" />}
            delay={0.1}
          />
          
          <ServiceCard 
            title="Water Resistant"
            description="Enjoy up to 80 minutes of water resistance, perfect for swimming, sports, and outdoor activities without compromising on protection."
            icon={<Droplet className="w-7 h-7 text-blue-500" />}
            delay={0.2}
          />
          
          <ServiceCard 
            title="Non-Greasy Formula"
            description="Our lightweight, fast-absorbing formula leaves no white cast or greasy residue, making it perfect for daily use under makeup or alone."
            icon={<Sun className="w-7 h-7 text-amber-500" />}
            delay={0.3}
          />
          
          <ServiceCard 
            title="Natural Ingredients"
            description="Enriched with antioxidants, vitamins, and plant extracts that nourish and protect your skin while fighting free radical damage."
            icon={<Leaf className="w-7 h-7 text-green-500" />}
            delay={0.4}
          />
          
          <ServiceCard 
            title="Long-Lasting Protection"
            description="Our photostable formula provides reliable protection throughout the day, requiring fewer reapplications for continuous coverage."
            icon={<Clock className="w-7 h-7 text-purple-500" />}
            delay={0.5}
          />
          
          <ServiceCard 
            title="Dermatologist Approved"
            description="Clinically tested and recommended by dermatologists, our gentle formula is suitable for all skin types, including sensitive skin."
            icon={<Award className="w-7 h-7 text-red-500" />}
            delay={0.6}
          />
        </div>
        
        <motion.div 
          className="mt-16 bg-gradient-to-r from-primary/10 to-amber-100/30 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-xl font-bold mb-2">Experience Premium Sun Protection</h3>
            <p className="text-gray-600 max-w-xl">Join thousands of satisfied customers who have made our Crème Solaire an essential part of their daily skincare routine.</p>
          </div>
          <button className="whitespace-nowrap px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors">
            Shop Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;