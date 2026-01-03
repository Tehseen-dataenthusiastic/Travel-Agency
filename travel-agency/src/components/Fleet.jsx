import { Users, Luggage, CheckCircle, MapPin } from 'lucide-react';

const Fleet = () => {
  const vehicles = [
    {
      name: 'Innova Crysta',
      image: '/images/vehicles/innova-crysta.jpg',
      capacity: '6-7 Seater',
      luggage: '3-4 Large Bags',
      bestFor: 'Family Trips & Outstation',
      features: ['Premium AC', 'Reclining Seats', 'Spacious Interior', 'USB Charging']
    },
    {
      name: 'Swift Dzire',
      image: '/images/vehicles/swift-dzire.jpg',
      capacity: '4 Seater',
      luggage: '2-3 Medium Bags',
      bestFor: 'City Rides & Airport',
      features: ['Fuel Efficient', 'Comfortable AC', 'Clean Interiors', 'GPS Navigation']
    },
    {
      name: 'Tempo Traveller',
      image: '/images/vehicles/tempo-traveller.jpg',
      capacity: '12-17 Seater',
      luggage: '10+ Large Bags',
      bestFor: 'Group Travel & Events',
      features: ['Push-back Seats', 'Extra Legroom', 'Entertainment System', 'Ample Storage']
    }
  ];

  return (
    <section id="fleet" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-700 mb-4">
            Our Premium Fleet
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Well-maintained, sanitized vehicles for your safe and comfortable journey
          </p>
        </div>

        {/* Pricing Banner */}
        <div className="relative mb-16 max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-accent-500 via-accent-600 to-accent-500 text-white py-6 px-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="text-sm uppercase tracking-wide mb-1 text-accent-100">Special Offer</p>
                <p className="text-3xl md:text-4xl font-bold">Starting at ₹18/km</p>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">No Hidden Charges</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Vehicle Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-accent-500 text-white px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-1">
                  <span className="text-lg">₹18</span>
                  <span className="text-xs">/km</span>
                </div>

                {/* Vehicle Name on Image */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold drop-shadow-lg">{vehicle.name}</h3>
                  <p className="text-sm text-gray-200 flex items-center gap-1 mt-1">
                    <MapPin className="w-4 h-4" />
                    {vehicle.bestFor}
                  </p>
                </div>
              </div>

              <div className="p-6">
                {/* Capacity Info */}
                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary-100 p-2 rounded-lg">
                      <Users className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Capacity</p>
                      <p className="text-sm font-semibold text-gray-800">{vehicle.capacity}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary-100 p-2 rounded-lg">
                      <Luggage className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Luggage</p>
                      <p className="text-sm font-semibold text-gray-800">{vehicle.luggage}</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Key Features</p>
                  <div className="grid grid-cols-2 gap-2">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                        <span className="text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Book Button */}
                <button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Book {vehicle.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-primary-50 border border-primary-100 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-primary-600 text-3xl font-bold mb-2">✓</div>
              <h4 className="font-semibold text-gray-800 mb-1">All Vehicles Sanitized</h4>
              <p className="text-sm text-gray-600">Regular deep cleaning & sanitization</p>
            </div>
            <div>
              <div className="text-primary-600 text-3xl font-bold mb-2">✓</div>
              <h4 className="font-semibold text-gray-800 mb-1">Professional Drivers</h4>
              <p className="text-sm text-gray-600">Verified, trained & experienced</p>
            </div>
            <div>
              <div className="text-primary-600 text-3xl font-bold mb-2">✓</div>
              <h4 className="font-semibold text-gray-800 mb-1">24/7 Support</h4>
              <p className="text-sm text-gray-600">Always available for your needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
