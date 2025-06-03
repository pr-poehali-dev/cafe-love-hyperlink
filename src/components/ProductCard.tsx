import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({
  id,
  name,
  description,
  price,
  image,
  category,
}: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({ id, name, price, image });
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white border-pink-200">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <Badge className="absolute top-3 left-3 bg-pink-500 text-white">
          {category}
        </Badge>
      </div>

      <CardContent className="p-4">
        <h3 className="text-xl font-semibold text-pink-800 mb-2 font-montserrat">
          {name}
        </h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-pink-600">{price} ₽</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white rounded-full transition-colors duration-300"
        >
          <Icon name="Plus" size={16} />В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
