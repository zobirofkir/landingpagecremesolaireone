
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  title: string;
  image: string;
  description: string;
  delay?: number;
  reversed?: boolean;
  price?: string;
  rating?: number;
  bestSeller?: boolean;
  spf?: number;
}

const ProductCard = ({ 
  title, 
  image, 
  description, 
  delay = 0, 
  reversed = false,
  price = "€32.99",
  rating = 4.8,
  bestSeller = false,
  spf = 50
}: ProductCardProps) => {
  return (
    <motion.div 
      className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-2xl overflow-hidden mb-10 shadow-sm border border-amber-50 hover:shadow-md transition-all duration-300`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className={`w-full md:w-1/2 p-8 flex items-center justify-center bg-gradient-to-br ${reversed ? 'from-amber-50 to-amber-100/30' : 'from-amber-100/30 to-amber-50'} relative`}>
        {bestSeller && (
          <div className="absolute top-6 left-6">
            <Badge className="bg-amber-500 text-white hover:bg-amber-600 px-3 py-1 rounded-full font-medium">
              Best Seller
            </Badge>
          </div>
        )}
        <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-amber-800">
          SPF {spf}+
        </div>
        <img 
          src={image} 
          alt={title} 
          className="object-contain rounded-xl h-[280px] w-full transform hover:scale-105 transition-transform duration-500" 
        />
      </div>
      
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <div className="mb-6">
          <div className="flex items-center mb-3">
            <div className="flex items-center text-amber-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  fill={i < Math.floor(rating) ? "currentColor" : "none"} 
                  className={i < Math.floor(rating) ? "text-amber-400" : "text-gray-300"} 
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">{rating} (120+)</span>
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            <span className="text-gray-400 text-sm uppercase tracking-wider block mb-1">Crème Solaire</span>
            <span className="text-gray-900">{title}</span>
          </h3>
          
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
          
          <div className="flex items-center mb-6">
            <span className="text-2xl font-bold text-gray-900 mr-3">{price}</span>
            <span className="text-sm text-gray-500 line-through">€39.99</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 py-6 font-medium">
              Add to Cart
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-6 border-amber-200 text-amber-800 hover:bg-amber-50 font-medium">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
