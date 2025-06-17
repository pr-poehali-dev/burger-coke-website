const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Hero Images */}
        <div className="flex justify-center items-center gap-12 mb-12">
          {/* Burger */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop&crop=center"
              alt="Бургер"
              className="w-64 h-64 object-cover rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-orange-500 rounded-full blur-xl opacity-30"></div>
          </div>

          {/* Cola */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=300&h=300&fit=crop&crop=center"
              alt="Кола"
              className="w-64 h-64 object-cover rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-500 rounded-full blur-xl opacity-30"></div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          Вкус который ты искал
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Сочные бургеры и освежающая кола — идеальное сочетание для твоего
          настроения
        </p>

        {/* Order Button */}
        <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-12 rounded-full text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
          🍔 Заказать сейчас
        </button>
      </div>
    </div>
  );
};

export default Index;
