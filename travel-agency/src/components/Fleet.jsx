import { Users, Luggage, CheckCircle, MapPin, ChevronLeft, ChevronRight, Snowflake, Star } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const Fleet = () => {
  const carouselRef = useRef(null);
  const [imageIndices, setImageIndices] = useState({});
  const [activeCard, setActiveCard] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const vehicles = [
    {
      name: 'Innova Crysta',
      images: ['/images/vehicles/innova-crysta.jpg'],
      capacity: '6+1 Seater',
      luggage: '3-4 Large Bags',
      bestFor: 'Family Trips & Outstation',
      features: ['Premium AC', 'Reclining Seats', 'Spacious Interior', 'USB Charging'],
      hasAC: true,
      popular: true
    },
    {
      name: 'Swift Dzire',
      images: ['/images/vehicles/swift-dzire.jpg'],
      capacity: '4 Seater',
      luggage: '2-3 Medium Bags',
      bestFor: 'City Rides & Airport',
      features: ['Fuel Efficient', 'Comfortable AC', 'Clean Interiors', 'GPS Navigation'],
      hasAC: true,
      popular: false
    },
    {
      name: 'Tata Winger AC',
      images: ['/images/vehicles/tata-winger-13-ac.jpeg', '/images/vehicles/tata-winger-13-ac(2).jpeg'],
      capacity: '12+1 Seater',
      luggage: '8-10 Large Bags',
      bestFor: 'Group Tours & Pilgrimages',
      features: ['Powerful AC', 'Push-back Seats', 'Spacious Cabin', 'Ample Legroom'],
      hasAC: true,
      popular: false
    },
    {
      name: 'Tata Winger',
      images: ['/images/vehicles/tata-winger-10.jpeg', '/images/vehicles/tata-winger-10(2).jpeg'],
      capacity: '9+1 Seater',
      luggage: '6-8 Large Bags',
      bestFor: 'Small Group Travel',
      features: ['Comfortable Seats', 'Good Ventilation', 'Luggage Space', 'Smooth Ride'],
      hasAC: false,
      popular: false
    },
    {
      name: 'Tempo Traveller AC',
      images: ['/images/vehicles/tempo-traveller-18-ac.jpeg', '/images/vehicles/tempo-traveller-18-ac(2).jpeg'],
      capacity: '17+1 Seater',
      luggage: '12+ Large Bags',
      bestFor: 'Medium Group Tours',
      features: ['Push-back Seats', 'Premium AC', 'Entertainment System', 'Extra Legroom'],
      hasAC: true,
      popular: true
    },
    {
      name: 'Tempo Traveller AC',
      images: ['/images/vehicles/tempo-traveller-21-ac.jpeg', '/images/vehicles/tempo-traveller-21-ac(2).jpeg'],
      capacity: '20+1 Seater',
      luggage: '15+ Large Bags',
      bestFor: 'Large Group Outings',
      features: ['Push-back Seats', 'Powerful AC', 'Music System', 'Ample Storage'],
      hasAC: true,
      popular: false
    },
    {
      name: 'Tempo Traveller AC',
      images: ['/images/vehicles/tempo-traveller-26-ac.jpeg', '/images/vehicles/tempo-traveller-26-ac(2).jpeg'],
      capacity: '26 Seater',
      luggage: '20+ Large Bags',
      bestFor: 'Corporate & Events',
      features: ['Luxury Seats', 'Dual AC', 'LED TV', 'Mic System'],
      hasAC: true,
      popular: false
    },
    {
      name: 'Luxury Bus AC',
      images: ['/images/vehicles/bus-45-ac.jpeg', '/images/vehicles/bus-45-ac(2).jpeg'],
      capacity: '45 Seater',
      luggage: '40+ Large Bags',
      bestFor: 'Weddings & Large Events',
      features: ['Push-back Seats', 'Powerful AC', 'Entertainment System', 'Huge Luggage Space'],
      hasAC: true,
      popular: true
    }
  ];

  const scrollToCard = (direction) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector('.fleet-card')?.offsetWidth || 400;
      const gap = 24;
      const scrollAmount = cardWidth + gap;

      if (direction === 'left') {
        carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector('.fleet-card')?.offsetWidth || 400;
      const gap = 24;
      carouselRef.current.scrollTo({ left: index * (cardWidth + gap), behavior: 'smooth' });
    }
  };

  const changeImage = (vehicleIndex, direction) => {
    const vehicle = vehicles[vehicleIndex];
    const currentIdx = imageIndices[vehicleIndex] || 0;
    const totalImages = vehicle.images.length;

    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIdx + 1) % totalImages;
    } else {
      newIndex = (currentIdx - 1 + totalImages) % totalImages;
    }

    setImageIndices(prev => ({ ...prev, [vehicleIndex]: newIndex }));
  };

  // Track active card on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const cardWidth = carouselRef.current.querySelector('.fleet-card')?.offsetWidth || 400;
        const gap = 24;
        const scrollLeft = carouselRef.current.scrollLeft;
        const newActive = Math.round(scrollLeft / (cardWidth + gap));
        setActiveCard(Math.min(newActive, vehicles.length - 1));
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, [vehicles.length]);

  return (
    <section id="fleet" className="py-14 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Our Fleet
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium <span className="text-primary-600">Vehicles</span>
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
                <p className="text-3xl md:text-4xl font-bold">Starting at ₹15/km</p>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">No Hidden Charges</span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scrollToCard('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-primary-600 hover:text-white text-primary-700 w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hidden md:flex border border-gray-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scrollToCard('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-primary-600 hover:text-white text-primary-700 w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hidden md:flex border border-gray-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-4 pt-2 px-2 snap-x snap-mandatory scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className="fleet-card flex-shrink-0 w-[320px] md:w-[360px] group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 snap-center border border-gray-100 hover:border-primary-200"
              >
                {/* Vehicle Image Carousel */}
                <div className="relative h-52 overflow-hidden bg-gray-100">
                  {/* Image with fade transition */}
                  <div className="relative w-full h-full">
                    {vehicle.images.map((img, imgIdx) => (
                      <img
                        key={imgIdx}
                        src={img}
                        alt={`${vehicle.name} ${imgIdx + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                          (imageIndices[index] || 0) === imgIdx ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                    {/* Popular Badge */}
                    {vehicle.popular && (
                      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        Popular
                      </div>
                    )}
                    {!vehicle.popular && <div />}

                    {/* AC Badge */}
                    {vehicle.hasAC && (
                      <div className="bg-white/95 backdrop-blur-sm text-blue-600 px-3 py-1.5 rounded-full font-bold shadow-lg flex items-center gap-1.5 text-xs">
                        <Snowflake className="w-3.5 h-3.5" />
                        AC
                      </div>
                    )}
                  </div>

                  {/* Image Navigation - Only show if multiple images */}
                  {vehicle.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); changeImage(index, 'prev'); }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg hover:scale-110"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); changeImage(index, 'next'); }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg hover:scale-110"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      {/* Image Dots */}
                      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2">
                        {vehicle.images.map((_, imgIdx) => (
                          <button
                            key={imgIdx}
                            onClick={(e) => { e.stopPropagation(); setImageIndices(prev => ({ ...prev, [index]: imgIdx })); }}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              (imageIndices[index] || 0) === imgIdx
                                ? 'bg-white w-6 shadow-lg'
                                : 'bg-white/50 w-1.5 hover:bg-white/80'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  {/* Vehicle Name on Image */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="flex items-end justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white drop-shadow-lg">{vehicle.name}</h3>
                        <p className="text-sm text-gray-200 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {vehicle.bestFor}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  {/* Capacity Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 bg-primary-50 px-3 py-2 rounded-xl">
                        <Users className="w-4 h-4 text-primary-600" />
                        <span className="text-sm font-bold text-primary-700">{vehicle.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-xl">
                        <Luggage className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-medium text-gray-700">{vehicle.luggage}</span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-5">
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-700 px-2.5 py-1.5 rounded-lg"
                        >
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Book Button */}
                  <button
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-primary-500/30 flex items-center justify-center gap-2"
                  >
                    Book Now
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {vehicles.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeCard === index
                    ? 'bg-primary-600 w-6'
                    : 'bg-gray-300 w-2 hover:bg-primary-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-br from-primary-50 to-blue-50 border border-primary-100 rounded-3xl p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">All Vehicles Sanitized</h4>
              <p className="text-sm text-gray-600">Regular deep cleaning & sanitization</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Professional Drivers</h4>
              <p className="text-sm text-gray-600">Verified, trained & experienced</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-7 h-7 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">24/7 Support</h4>
              <p className="text-sm text-gray-600">Always available for your needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
