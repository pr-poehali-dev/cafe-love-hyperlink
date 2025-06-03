import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
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
          <Button
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            onClick={() => (window.location.href = "/cart")}
          >
            <Icon name="ShoppingCart" size={20} />
            Корзина (3)
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
