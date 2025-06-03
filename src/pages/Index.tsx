import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Index = () => {
  const [notes, setNotes] = useState("");
  const { getTotalItems } = useCart();

  const handleSave = () => {
    localStorage.setItem("notepad-content", notes);
    alert("Заметки сохранены! 💾");
  };

  const handleLoad = () => {
    const saved = localStorage.getItem("notepad-content") || "";
    setNotes(saved);
  };

  const handleClear = () => {
    if (confirm("Удалить все заметки?")) {
      setNotes("");
      localStorage.removeItem("notepad-content");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <header className="bg-gradient-to-r from-blue-100 to-indigo-100 py-6 px-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="text-center flex-1">
            <h1 className="text-4xl font-bold text-blue-800 mb-2">
              Мой Блокнот 📝
            </h1>
            <p className="text-blue-600">Записывайте мысли, планы и идеи</p>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/cafe">
              <Button
                variant="outline"
                className="border-blue-300 text-blue-700 hover:bg-blue-100"
              >
                <Icon name="Coffee" size={16} />
                Кафе
              </Button>
            </Link>
            <Link to="/cart">
              <Button
                variant="outline"
                className="border-blue-300 text-blue-700 hover:bg-blue-100"
              >
                <Icon name="ShoppingCart" size={16} />
                Корзина ({getTotalItems()})
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-8 px-6">
        <Card className="border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-blue-800">Мои заметки</CardTitle>
            <div className="flex gap-2">
              <Button
                onClick={handleLoad}
                variant="outline"
                size="sm"
                className="border-blue-300 text-blue-700 hover:bg-blue-100"
              >
                <Icon name="FolderOpen" size={16} />
                Загрузить
              </Button>
              <Button
                onClick={handleSave}
                size="sm"
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                <Icon name="Save" size={16} />
                Сохранить
              </Button>
              <Button onClick={handleClear} variant="destructive" size="sm">
                <Icon name="Trash2" size={16} />
                Очистить
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Напишите свои мысли, планы или идеи... ✨"
              className="min-h-[500px] border-blue-200 focus:border-blue-400 resize-none text-lg"
            />
            <div className="mt-4 text-sm text-blue-600">
              Символов: {notes.length} | Слов:{" "}
              {notes.split(/\s+/).filter((word) => word.length > 0).length}
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-blue-600 text-sm">
            💡 Заметки автоматически сохраняются в браузере
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
