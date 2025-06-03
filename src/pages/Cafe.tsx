import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";

const Cafe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      <Header />
      <ProductGrid />

      <footer className="bg-pink-100 py-8 mt-12">
        <div className="max-w-6xl mx-auto text-center px-6">
          <p className="text-pink-700 text-lg font-medium">
            Кафе "Любовь" - создаем моменты счастья каждый день 💖
          </p>
          <p className="text-pink-600 mt-2">
            ул. Романтическая, 14 | +7 (999) 123-45-67
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Cafe;
