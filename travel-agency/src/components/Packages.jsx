import { MapPin, Clock, Users, Star, ArrowRight, Calendar } from 'lucide-react';

const Packages = () => {
  const packages = [
    {
      id: 1,
      name: 'Mahabaleshwar Hill Station',
      image: '/images/packages/mahabaleshwar.jpg',
      duration: '2 Days / 1 Night',
      distance: '120 km from Pune',
      price: '₹4,500',
      rating: 4.8,
      reviews: 156,
      highlights: ['Venna Lake', 'Mapro Garden', 'Elephant Head Point', 'Pratapgad Fort'],
      inclusions: ['Transportation', 'Driver Allowance', 'Fuel & Tolls'],
      description: 'Experience the scenic beauty of Mahabaleshwar with strawberry farms, viewpoints, and pleasant weather.',
      bestTime: 'Oct - June'
    },
    {
      id: 2,
      name: 'Lonavala & Khandala',
      image: '/images/packages/lonavala.jpg',
      duration: '1 Day Trip',
      distance: '65 km from Pune',
      price: '₹2,800',
      rating: 4.7,
      reviews: 203,
      highlights: ['Tiger Point', 'Bhushi Dam', 'Karla Caves', 'Pawna Lake'],
      inclusions: ['Transportation', 'Driver Allowance', 'Fuel & Tolls'],
      description: 'Explore the misty hills, waterfalls, and scenic viewpoints of Lonavala-Khandala during monsoon.',
      bestTime: 'Jun - Sep'
    },
    {
      id: 3,
      name: 'Sinhagad Fort Trek',
      image: '/images/packages/sinhagad.jpg',
      duration: 'Half Day (4-5 hrs)',
      distance: '35 km from Pune',
      price: '₹1,500',
      rating: 4.6,
      reviews: 89,
      highlights: ['Historical Fort', 'Trekking', 'Khadakwasla Dam View', 'Local Food'],
      inclusions: ['Transportation', 'Driver Allowance', 'Fuel & Tolls'],
      description: 'Trek to the historic Sinhagad Fort, enjoy local delicacies like Zunka Bhakri and Pithla Bhakri.',
      bestTime: 'Year Round'
    },
    {
      id: 4,
      name: 'Lavasa City',
      image: '/images/packages/lavasa.jpg',
      duration: '1 Day Trip',
      distance: '65 km from Pune',
      price: '₹2,500',
      rating: 4.5,
      reviews: 124,
      highlights: ['Lakeside Promenade', 'Water Sports', 'Nature Trail', 'Italian Architecture'],
      inclusions: ['Transportation', 'Driver Allowance', 'Fuel & Tolls'],
      description: 'Visit India\'s first planned hill city with beautiful lakeside views and Italian-style architecture.',
      bestTime: 'Year Round'
    },
    {
      id: 5,
      name: 'Alibaug Beach',
      image: '/images/packages/alibaug.jpg',
      duration: '1 Day Trip',
      distance: '140 km from Pune',
      price: '₹3,800',
      rating: 4.6,
      reviews: 178,
      highlights: ['Beach Activities', 'Kolaba Fort', 'Water Sports', 'Seafood'],
      inclusions: ['Transportation', 'Driver Allowance', 'Fuel & Tolls'],
      description: 'Relax at pristine beaches, explore Kolaba Fort, and enjoy fresh seafood at coastal restaurants.',
      bestTime: 'Oct - Mar'
    },
    {
      id: 6,
      name: 'Shirdi Darshan',
      image: '/images/packages/shirdi.jpg',
      duration: '1 Day Trip',
      distance: '185 km from Pune',
      price: '₹4,200',
      rating: 4.9,
      reviews: 267,
      highlights: ['Sai Baba Temple', 'Dwarkamai', 'Chavadi', 'Shani Shingnapur'],
      inclusions: ['Transportation', 'Driver Allowance', 'Fuel & Tolls'],
      description: 'Seek blessings at the holy Shirdi Sai Baba temple with comfortable AC transportation.',
      bestTime: 'Year Round'
    }
  ];

  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4">
            Tour Packages
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Destinations Near Pune
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover the best tourist destinations around Pune with our all-inclusive tour packages.
            Comfortable travel, experienced drivers, and unforgettable experiences.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Best Time Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {pkg.bestTime}
                </div>

                {/* Title on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 text-accent-400" fill="currentColor" />
                      <span className="text-white text-sm font-semibold">{pkg.rating}</span>
                      <span className="text-white/80 text-xs">({pkg.reviews})</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-primary-600" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-primary-600" />
                    <span>{pkg.distance}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                  {pkg.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-700 mb-2">Highlights:</p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                    {pkg.highlights.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        +{pkg.highlights.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Inclusions */}
                <div className="mb-4 text-xs text-gray-600">
                  <span className="font-semibold">Includes:</span> {pkg.inclusions.join(', ')}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-xs text-gray-500">Starting from</p>
                    <p className="text-2xl font-bold text-primary-700">{pkg.price}</p>
                    <p className="text-xs text-gray-500">per vehicle</p>
                  </div>
                  <button
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 text-sm"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Packages CTA */}
        <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Package?
            </h3>
            <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
              Planning a trip to a different destination? We can create customized tour packages
              based on your preferences, group size, and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Request Custom Package
              </button>
              <a
                href="tel:+919999999999"
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
              >
                <Users className="w-5 h-5" />
                Call for Group Bookings
              </a>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Flexible Itinerary</h4>
            <p className="text-sm text-gray-600">Customize your schedule and visit places at your own pace</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Transparent Pricing</h4>
            <p className="text-sm text-gray-600">No hidden charges, all-inclusive rates with fuel & tolls</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Expert Local Drivers</h4>
            <p className="text-sm text-gray-600">Knowledgeable drivers who know the best routes and spots</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
