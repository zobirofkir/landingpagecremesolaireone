
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  return (
    <section className="py-12 px-4 md:px-8">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skin Care Products <span className="text-brand-green">For Teenage Girl</span>
        </motion.h2>
        <motion.p 
          className="max-w-2xl mx-auto text-gray-600 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Discover 100% Vegetarian Beauty Products In World Wide. Products Are Cruelty Free Beauty Products. Buy Face, Body, Hair Care, Makeup Products, Fragrance On.
        </motion.p>
      </motion.div>
      
      <div className="space-y-10">
        <ProductCard 
          title="Brand Shampoo"
          image="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
          description="Discover 100% Vegetarian Beauty Products In World Wide. Products Are Cruelty Free Beauty Products. Buy Face, Body, Hair Care, Makeup Products, Fragrance On."
          delay={0.1}
        />
        
        <ProductCard 
          title="Beauty Cream"
          image="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
          description="Discover 100% Vegetarian Beauty Products In World Wide. Products Are Cruelty Free Beauty Products. Buy Face, Body, Hair Care, Makeup Products, Fragrance On."
          delay={0.2}
          reversed={true}
        />
        
        <ProductCard 
          title="Primer Plus 30 ML"
          image="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
          description="Discover 100% Vegetarian Beauty Products In World Wide. Products Are Cruelty Free Beauty Products. Buy Face, Body, Hair Care, Makeup Products, Fragrance On."
          delay={0.3}
        />
      </div>
    </section>
  );
};

export default ProductsSection;
