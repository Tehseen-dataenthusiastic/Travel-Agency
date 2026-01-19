import { GraduationCap, Briefcase, Heart, ArrowRight, MapPin, Plane, Car, Waves, Navigation } from 'lucide-react';
import { useState } from 'react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('local');

  const localServices = [
    { name: 'Pune Darshan (City Tour)', type: 'local' },
    { name: 'Mumbai Local', type: 'local' },
    { name: 'Mumbai Darshan (City Tour)', type: 'local' },
    { name: 'Mumbai Airport T2', type: 'airport' },
    { name: 'Mumbai Airport T1', type: 'airport' },
    { name: 'Mumbai Airport Pick-up & Drop', type: 'airport' }
  ];

  const tourPackages = [
    'Mahabaleshwar', 'Lonavala', 'Nashik', 'Aurangabad', 'Shirdi', 'Shegaon',
    'Mahurgad', 'Nagpur', 'Amravati', 'Wardha', 'Tadoba', 'Latur',
    'Tuljapur', 'Akkalkot', 'Pandharpur', 'Sangli', 'Kolhapur', 'Konkan'
  ];

  const coastalTours = [
    'Malvan', 'Ganpatipule', 'Dapoli', 'Diveagar', 'Sindhudurg'
  ];
  const services = [
    {
      icon: GraduationCap,
      title: 'School Trips',
      description: 'Safe and comfortable transportation for educational tours, field trips, and school excursions. We prioritize student safety with verified drivers and real-time tracking.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      features: ['Verified Drivers', 'GPS Tracking', 'On-time Pickup', 'Safety First']
    },
    {
      icon: Briefcase,
      title: 'Corporate Trips',
      description: 'Professional transportation solutions for corporate events, client meetings, airport transfers, and employee commute. Punctual, comfortable, and reliable service.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      features: ['Professional Service', 'Fleet Options', 'Flexible Booking', 'Monthly Packages']
    },
    {
      icon: Heart,
      title: 'Wedding Travel',
      description: 'Make your special day memorable with our premium wedding transportation services. We handle all guest logistics including pickups, drops, and event shuttles.',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600',
      features: ['Decorated Vehicles', 'Guest Coordination', 'Multi-Day Booking', 'Punctual Service']
    }
  ];

  return (
    <section id="services" className="py-14 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tailored Travel Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Specialized transportation services designed for your specific needs with professional care
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`${service.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <div className={`w-1.5 h-1.5 rounded-full ${service.color.split(' ')[0].replace('from-', 'bg-')} mr-2`}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Link */}
                  <button
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:gap-3 transition-all`}
                  >
                    Book Now
                    <ArrowRight className={`w-4 h-4 ${service.iconColor}`} />
                  </button>
                </div>

                {/* Bottom Accent */}
                <div className={`h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            );
          })}
        </div>

        {/* Service Routes Section */}
        <div className="mt-16 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-400/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-4">
                <Navigation className="w-4 h-4 text-accent-400" />
                <span className="text-sm text-white font-medium">Service Coverage</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Where We <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">Take You</span>
              </h3>
              <p className="text-gray-300 max-w-xl mx-auto">All destinations covered from Pune with professional drivers and comfortable vehicles</p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <button
                onClick={() => setActiveTab('local')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === 'local'
                    ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/30'
                    : 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20'
                }`}
              >
                <Car className="w-5 h-5" />
                Local & Airport
              </button>
              <button
                onClick={() => setActiveTab('tours')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === 'tours'
                    ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/30'
                    : 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20'
                }`}
              >
                <MapPin className="w-5 h-5" />
                Darshan Tours
              </button>
              <button
                onClick={() => setActiveTab('coastal')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === 'coastal'
                    ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/30'
                    : 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20'
                }`}
              >
                <Waves className="w-5 h-5" />
                Coastal Getaways
              </button>
            </div>

            {/* Content */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 min-h-[300px]">

              {/* Local & Airport Services */}
              {activeTab === 'local' && (
                <div className="animate-fade-in">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {localServices.map((service, idx) => (
                      <div
                        key={idx}
                        className="group bg-white/10 backdrop-blur-sm border border-white/10 hover:border-accent-400/50 rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] hover:bg-white/15"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                            service.type === 'airport'
                              ? 'bg-gradient-to-br from-accent-500 to-accent-600'
                              : 'bg-gradient-to-br from-primary-500 to-primary-600'
                          }`}>
                            {service.type === 'airport' ? (
                              <Plane className="w-6 h-6 text-white" />
                            ) : (
                              <Car className="w-6 h-6 text-white" />
                            )}
                          </div>
                          <div>
                            <p className="text-white font-semibold">{service.name}</p>
                            <p className="text-gray-300 text-sm">From Pune</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tour Packages */}
              {activeTab === 'tours' && (
                <div className="animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Starting Point: Pune</p>
                      <p className="text-gray-300 text-sm">18 Destinations Available</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    {tourPackages.map((destination, idx) => (
                      <div
                        key={idx}
                        className="group bg-white/10 backdrop-blur-sm border border-white/10 hover:border-accent-400/50 rounded-xl px-4 py-3 text-center transition-all duration-300 hover:scale-105 hover:bg-white/15"
                      >
                        <p className="text-white font-medium text-sm group-hover:text-accent-400 transition-colors">{destination}</p>
                        <p className="text-gray-400 text-xs mt-1">Darshan</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Coastal Tours */}
              {activeTab === 'coastal' && (
                <div className="animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center">
                      <Waves className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Konkan Coastal Circuit</p>
                      <p className="text-gray-300 text-sm">Beach & Temple Tours from Pune</p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {coastalTours.map((destination, idx) => (
                      <div
                        key={idx}
                        className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-400/50 rounded-xl p-5 text-center transition-all duration-300 hover:scale-105"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Waves className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-white font-semibold group-hover:text-accent-400 transition-colors">{destination}</p>
                        <p className="text-gray-400 text-xs mt-1">Beach Darshan</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="text-center mt-8">
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-accent-500/50"
              >
                Book Your Trip Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20 bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Choose Pune Travelers?
            </h3>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏆</span>
                </div>
                <h4 className="font-semibold mb-2">20+ Years</h4>
                <p className="text-sm text-gray-200">Trusted Experience</p>
              </div>

              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💯</span>
                </div>
                <h4 className="font-semibold mb-2">100% Safe</h4>
                <p className="text-sm text-gray-200">Sanitized Vehicles</p>
              </div>

              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h4 className="font-semibold mb-2">On-Time</h4>
                <p className="text-sm text-gray-200">Punctual Service</p>
              </div>

              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💰</span>
                </div>
                <h4 className="font-semibold mb-2">Best Rates</h4>
                <p className="text-sm text-gray-200">Starting ₹15/km</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
