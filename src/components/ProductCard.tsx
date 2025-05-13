
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  return (
    <motion.div 
      className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-2xl overflow-hidden mb-10 shadow-sm border border-amber-50 hover:shadow-md transition-all duration-300`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className={`w-full md:w-1/2 p-8 flex items-center justify-center bg-gradient-to-br ${reversed ? 'from-amber-50 to-amber-100/30' : 'from-amber-100/30 to-amber-50'} relative`} id="products">
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
            <Button 
              className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 py-6 font-medium"
              onClick={() => setIsModalOpen(true)}
            >
              Buy
            </Button>
          </div>
        </div>
      </div>

      {/* Purchase Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Complete Your Purchase</DialogTitle>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" className="col-span-3" placeholder="Your full name" />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" type="email" className="col-span-3" placeholder="your@email.com" />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="address" className="text-right">
                Address
              </Label>
              <Input id="address" className="col-span-3" placeholder="Delivery address" />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input id="phone" type="tel" className="col-span-3" placeholder="Your phone number" />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quantity" className="text-right">
                Quantity
              </Label>
              <div className="col-span-3 flex items-center">
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-8 w-8 p-0"
                >
                  -
                </Button>
                <Input 
                  id="quantity" 
                  type="number" 
                  min="1" 
                  value={quantity} 
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="h-8 w-16 mx-2 text-center" 
                />
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-8 w-8 p-0"
                >
                  +
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <div className="text-right text-sm text-gray-500">
                Payment
              </div>
              <div className="col-span-3 text-sm">
                Cash on Delivery
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button 
              className="bg-amber-600 hover:bg-amber-700 text-white"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              Confirm Order
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default ProductCard;
