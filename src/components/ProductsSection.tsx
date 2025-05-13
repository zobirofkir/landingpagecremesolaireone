import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles } from "lucide-react";

const ProductsSection = () => {
  const sunscreenProducts = [
    {
      title: "Ultra Defense SPF 50+",
      image: "https://kreme-paris.com/cdn/shop/articles/creme-solaire-anti-taches-routine-beaute_1920x.jpg?v=1716810733",
      description: "Our highest protection formula with advanced UVA/UVB filters. Water-resistant and enriched with antioxidants to protect against environmental damage while keeping skin hydrated.",
      delay: 0.1,
      price: "€34.99",
      rating: 4.9,
      bestSeller: true,
      spf: 50
    },
    {
      title: "Daily Defense Tinted SPF 40",
      image: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description: "Lightweight tinted formula that provides natural coverage while protecting your skin. Perfect for everyday use, it blends seamlessly and gives a natural, radiant finish.",
      delay: 0.2,
      reversed: true,
      price: "€29.99",
      rating: 4.7,
      spf: 40
    },
    {
      title: "Sport Active SPF 50",
      image: "https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=50,format=auto/sources/images/choisir-creme-solaire.jpg",
      description: "Extra water and sweat resistant formula designed for active lifestyles. Provides up to 80 minutes of water resistance and won't run into eyes. Perfect for sports and outdoor activities.",
      delay: 0.3,
      price: "€32.99",
      rating: 4.8,
      spf: 50
    }
  ];

  return (
    <section className="py-24 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-amber-50/40 via-white to-white" id="products">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <motion.div
            className="mb-8 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-amber-100/70 rounded-full text-amber-800 text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Sparkles size={14} className="text-amber-600" />
              <span>Premium Collection</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Luxurious Sun Protection
            </motion.h2>
            
            <motion.p 
              className="max-w-2xl text-gray-600 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our dermatologist-approved sunscreen collection offers advanced protection with premium ingredients for every skin type and lifestyle need.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" className="rounded-full border-amber-300 text-amber-800 hover:bg-amber-50 flex items-center gap-2 px-6 py-6 text-base">
              View All Products <ChevronRight size={16} />
            </Button>
          </motion.div>
        </div>
        
        <div className="space-y-20">
          {sunscreenProducts.map((product, index) => (
            <ProductCard 
              key={index}
              title={product.title}
              image={product.image}
              description={product.description}
              delay={product.delay}
              reversed={product.reversed}
              price={product.price}
              rating={product.rating}
              bestSeller={product.bestSeller}
              spf={product.spf}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-24 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-amber-100/60 to-amber-50/60 px-8 py-12 md:py-16 rounded-3xl w-full max-w-4xl shadow-sm border border-amber-100/50">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-amber-800">Find Your Perfect Sun Protection</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Not sure which sunscreen is right for you? Take our quick skin assessment to get personalized recommendations for your skin type and lifestyle.
            </p>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-10 py-7 text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300">
              Take Skin Assessment
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;