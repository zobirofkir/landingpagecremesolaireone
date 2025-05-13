import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const ProductsSection = () => {
  const sunscreenProducts = [
    {
      title: "Ultra Defense SPF 50+",
      image: "https://images.unsplash.com/photo-1556229174-5e42a09e45c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description: "Our highest protection formula with advanced UVA/UVB filters. Water-resistant and enriched with antioxidants to protect against environmental damage while keeping skin hydrated.",
      delay: 0.1
    },
    {
      title: "Daily Defense Tinted SPF 40",
      image: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description: "Lightweight tinted formula that provides natural coverage while protecting your skin. Perfect for everyday use, it blends seamlessly and gives a natural, radiant finish.",
      delay: 0.2,
      reversed: true
    },
    {
      title: "Sport Active SPF 50",
      image: "https://images.unsplash.com/photo-1607697552816-c62e2e797e8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description: "Extra water and sweat resistant formula designed for active lifestyles. Provides up to 80 minutes of water resistance and won't run into eyes. Perfect for sports and outdoor activities.",
      delay: 0.3
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-amber-50/30 to-white" id="products">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <motion.div
            className="mb-6 md:mb-0"
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
              Our Collection
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Premium <span className="text-primary">Sun Protection</span>
            </motion.h2>
            
            <motion.p 
              className="max-w-2xl text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our dermatologist-approved sunscreen collection offers advanced protection for every skin type and lifestyle need.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/5 flex items-center gap-2">
              View All Products <ChevronRight size={16} />
            </Button>
          </motion.div>
        </div>
        
        <div className="space-y-16">
          {sunscreenProducts.map((product, index) => (
            <ProductCard 
              key={index}
              title={product.title}
              image={product.image}
              description={product.description}
              delay={product.delay}
              reversed={product.reversed}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-20 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-amber-100/50 to-primary/10 px-6 py-8 md:py-12 rounded-2xl w-full max-w-4xl">
            <h3 className="text-2xl font-bold mb-3">Find Your Perfect Sun Protection</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Not sure which sunscreen is right for you? Take our quick skin assessment to get personalized recommendations for your skin type and lifestyle.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6">
              Take Skin Assessment
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;