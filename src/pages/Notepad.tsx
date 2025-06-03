import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Notepad = () => {
  const [notes, setNotes] = useState("");

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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 py-8 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-pink-800">Блокнот 📝</h1>
          <Link to="/">
            <Button
              variant="outline"
              className="border-pink-300 text-pink-700 hover:bg-pink-100"
            >
              <Icon name="ArrowLeft" size={16} />К меню
            </Button>
          </Link>
        </div>

        <Card className="border-pink-200">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-pink-800">Мои заметки</CardTitle>
            <div className="flex gap-2">
              <Button
                onClick={handleLoad}
                variant="outline"
                size="sm"
                className="border-pink-300 text-pink-700 hover:bg-pink-100"
              >
                <Icon name="FolderOpen" size={16} />
                Загрузить
              </Button>
              <Button
                onClick={handleSave}
                size="sm"
                className="bg-pink-500 hover:bg-pink-600 text-white"
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
              placeholder="Напишите свои мысли, планы или рецепты... ✨"
              className="min-h-[400px] border-pink-200 focus:border-pink-400 resize-none text-lg"
            />
            <div className="mt-4 text-sm text-pink-600">
              Символов: {notes.length} | Слов:{" "}
              {notes.split(/\s+/).filter((word) => word.length > 0).length}
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-pink-600 text-sm">
            💡 Заметки автоматически сохраняются в браузере
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notepad;
