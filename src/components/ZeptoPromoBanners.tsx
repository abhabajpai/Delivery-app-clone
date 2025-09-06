const ZeptoPromoBanners = () => {
  const banners = [
    {
      id: 1,
      title: "Paan Corner",
      subtitle: "Get smoking accessories, fresheners & more in 10 mins\nthis monsoon with Zepto!",
      bgColor: "bg-gradient-to-r from-green-400 to-green-500",
      textColor: "text-black",
      buttonBg: "bg-white",
      buttonText: "text-black",
      image: "/categories/17.avif", // Using existing category image as placeholder
    },
    {
      id: 2,
      title: "Super Sonic",
      subtitle: "DEALS",
      description: "UP TO 90% OFF",
      bgColor: "bg-gradient-to-r from-gray-800 to-black",
      textColor: "text-white",
      buttonBg: "bg-red-500",
      buttonText: "text-white",
      image: "/categories/16.webp",
    },
    {
      id: 3,
      title: "Beauty LIT",
      subtitle: "FEST",
      description: "UP TO 60% OFF",
      bgColor: "bg-gradient-to-r from-pink-400 to-pink-500",
      textColor: "text-white",
      buttonBg: "bg-white",
      buttonText: "text-pink-500",
      image: "/categories/18.webp",
    },
  ];

  return (
    <section className="py-6">
      <div className="_container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className={`${banner.bgColor} rounded-2xl p-6 relative overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform`}
            >
              <div className="relative z-10">
                <h3 className={`text-2xl font-bold ${banner.textColor} mb-2`}>
                  {banner.title}
                </h3>
                <p className={`text-base ${banner.textColor} mb-4 leading-relaxed whitespace-pre-line`}>
                  {banner.subtitle}
                </p>
                {banner.description && (
                  <p className={`text-lg font-semibold ${banner.textColor} mb-4`}>
                    {banner.description}
                  </p>
                )}
                <button
                  className={`${banner.buttonBg} ${banner.buttonText} px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity`}
                >
                  {banner.id === 1 ? 'Order Now' : 'Shop Now'}
                </button>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
                <img 
                  src={banner.image} 
                  alt={banner.title}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZeptoPromoBanners;
