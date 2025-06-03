import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 flex items-center justify-center">
        <Card className="w-full max-w-md text-center p-8">
          <CardContent className="pt-6">
            <Icon
              name="ShoppingCart"
              size={64}
              className="mx-auto mb-4 text-pink-300"
            />
            <h2 className="text-2xl font-bold text-pink-800 mb-2">
              Корзина пуста
            </h2>
            <p className="text-pink-600 mb-6">
              Добавьте что-нибудь вкусненькое!
            </p>
            <Link to="/">
              <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full">
                <Icon name="ArrowLeft" size={16} />К меню
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 py-8 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-pink-800">Корзина 🛒</h1>
          <Link to="/">
            <Button
              variant="outline"
              className="border-pink-300 text-pink-700 hover:bg-pink-100"
            >
              <Icon name="ArrowLeft" size={16} />К меню
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="border-pink-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-pink-800">
                        {item.name}
                      </h3>
                      <p className="text-pink-600">{item.price} ₽</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="border-pink-300 text-pink-700 hover:bg-pink-100"
                      >
                        <Icon name="Minus" size={16} />
                      </Button>
                      <span className="w-8 text-center font-medium">
                        {item.quantity}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="border-pink-300 text-pink-700 hover:bg-pink-100"
                      >
                        <Icon name="Plus" size={16} />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => removeItem(item.id)}
                        className="ml-2"
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <Card className="border-pink-200 sticky top-4">
              <CardHeader>
                <CardTitle className="text-pink-800">Итого</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Сумма:</span>
                  <span className="text-pink-600">{getTotalPrice()} ₽</span>
                </div>
                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white rounded-full">
                  <Icon name="CreditCard" size={16} />
                  Оформить заказ
                </Button>
                <Button
                  variant="outline"
                  onClick={clearCart}
                  className="w-full border-pink-300 text-pink-700 hover:bg-pink-100"
                >
                  <Icon name="Trash2" size={16} />
                  Очистить корзину
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
