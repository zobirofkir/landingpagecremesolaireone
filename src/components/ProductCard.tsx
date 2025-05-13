
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  image: string;
  description: string;
  delay?: number;
  reversed?: boolean;
}

const ProductCard = ({ title, image, description, delay = 0, reversed = false }: ProductCardProps) => {
  return (
    <motion.div 
      className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-xl overflow-hidden mb-10`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="w-full md:w-1/2 p-6 flex items-center justify-center bg-gray-50">
        <img src={image} alt={title} className="max-h-60 object-contain" />
      </div>
      
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
        <div className="mb-4">
          <h3 className="text-lg md:text-xl font-bold mb-2">Skin Care <span className="text-brand-green">{title}</span></h3>
          <p className="text-sm text-gray-600 mb-6">{description}</p>
          
          <div className="flex space-x-3">
            <Button className="bg-brand-green hover:bg-brand-green/90 text-white rounded-full px-6 text-sm">
              Add to Cart
            </Button>
            <Button variant="outline" className="rounded-full px-6 border-gray-300 hover:bg-gray-50 text-sm">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
