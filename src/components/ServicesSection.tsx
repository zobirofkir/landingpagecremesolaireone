
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { Target, Gift, Armchair } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-12 px-4 md:px-8">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-brand-green">We Services</span> Skin Sides
        </motion.h2>
        <motion.p 
          className="max-w-2xl mx-auto text-gray-600 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Discover 100% Vegetarian Beauty Products In World Wide, Products Are Cruelty Free Beauty Products. Buy Face, Body, Hair Care, Makeup Products, Fragrance On.
        </motion.p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard 
          title="Premier Service"
          description="Discover 100% Vegetarian Beauty Products In World Wide. Products Are Cruelty Free Beauty Products. Buy Face, Body, Hair Care, Makeup Products, Fragrance On."
          icon={<Target className="w-8 h-8 text-red-500" />}
          delay={0.1}
        />
        
        <ServiceCard 
          title="Prioritized Customers"
          description="Discover 100% Vegetarian Beauty Products In World Wide. Products Are Cruelty Free Beauty Products. Buy Face, Body, Hair Care, Makeup Products, Fragrance On."
          icon={<Gift className="w-8 h-8 text-purple-500" />}
          delay={0.2}
        />
        
        <ServiceCard 
          title="Perfected Skill"
          description="Discover 100% Vegetarian Beauty Products In World Wide. Products Are Cruelty Free Beauty Products. Buy Face, Body, Hair Care, Makeup Products, Fragrance On."
          icon={<Armchair className="w-8 h-8 text-blue-500" />}
          delay={0.3}
        />
      </div>
    </section>
  );
};

export default ServicesSection;
