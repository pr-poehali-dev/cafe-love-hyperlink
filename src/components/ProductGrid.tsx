import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Розовый макарон",
      description: "Нежный французский макарон с клубничной начинкой",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1558312657-b2dead5c8d5d?w=400&h=300&fit=crop",
      category: "Десерты",
    },
    {
      id: 2,
      name: "Клубничный чизкейк",
      description: "Воздушный чизкейк с свежей клубникой и розовым декором",
      price: 320,
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
      category: "Торты",
    },
    {
      id: 3,
      name: "Розовый латте",
      description: "Ароматный кофе с малиновым сиропом и молочной пенкой",
      price: 280,
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
      category: "Напитки",
    },
    {
      id: 4,
      name: "Капкейк Любовь",
      description: "Ванильный капкейк с розовым кремом и сердечком",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&h=300&fit=crop",
      category: "Капкейки",
    },
    {
      id: 5,
      name: "Розовый смузи",
      description: "Освежающий смузи из клубники, малины и банана",
      price: 220,
      image:
        "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop",
      category: "Напитки",
    },
    {
      id: 6,
      name: "Розовые эклеры",
      description: "Классические эклеры с розовой глазурью и ванильным кремом",
      price: 200,
      image:
        "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&h=300&fit=crop",
      category: "Десерты",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-pink-800 mb-8 font-montserrat">
        Наше меню ✨
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
