const ZeptoFooterMessage = () => {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-white py-12 text-center">
      <div className="_container">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
          The place that fits all
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">
          your needs
        </h2>
        <p className="text-lg text-gray-600 mb-2">
          Crafted with love from <span className="text-purple-600 font-semibold">Zepto Team</span> ❤️
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <span className="text-purple-600">🏢</span>
          <span>LIC no - 11224999000872</span>
        </div>
        
        {/* How it works section */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-700 mb-8">How it Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="font-semibold text-gray-700 mb-2">Open the app</h4>
              <p className="text-sm text-gray-600 text-center">
                Download the app from the App Store or Google Play and create your account in seconds.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h4 className="font-semibold text-gray-700 mb-2">Place an order</h4>
              <p className="text-sm text-gray-600 text-center">
                Browse through our wide range of products and add them to your cart.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-semibold text-gray-700 mb-2">Get fast delivery</h4>
              <p className="text-sm text-gray-600 text-center">
                Your order will be delivered to your doorstep in just 10 minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZeptoFooterMessage;
