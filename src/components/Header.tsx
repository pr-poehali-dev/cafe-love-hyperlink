import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { getTotalItems } = useCart();
  return (
    <header className="bg-gradient-to-r from-pink-100 to-rose-100 py-8 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-center flex-1">
          <h1 className="text-5xl font-bold text-pink-800 mb-2 font-montserrat">
            Кафе Любовь 💕
          </h1>
          <p className="text-pink-600 text-lg">
            Место, где рождаются сладкие моменты
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/notepad">
            <Button
              variant="outline"
              className="border-pink-300 text-pink-700 hover:bg-pink-100 px-4 py-2 rounded-full"
            >
              <Icon name="NotebookPen" size={18} />
              Блокнот
            </Button>
          </Link>
          <Link to="/cart">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
              <Icon name="ShoppingCart" size={20} />
              Корзина ({getTotalItems()})
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
