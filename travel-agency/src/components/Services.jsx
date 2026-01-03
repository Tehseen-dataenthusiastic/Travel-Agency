import { GraduationCap, Briefcase, Heart, ArrowRight } from 'lucide-react';

const Services = () => {
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
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
                <p className="text-sm text-gray-200">Starting ₹18/km</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
