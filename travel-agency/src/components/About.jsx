import { Award, Users, Clock, Star, Shield, ThumbsUp } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pune's Most Trusted Travel Service
            </h2>
          </div>

          {/* Main Feature - Working Since 2002 */}
          <div className="bg-gradient-to-br from-accent-500 via-accent-600 to-accent-700 text-white py-8 px-8 rounded-3xl shadow-2xl mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center gap-4 mb-3">
                <Clock className="w-10 h-10" />
                <p className="text-4xl md:text-5xl font-bold">Working Since 2002</p>
              </div>
              <p className="text-xl md:text-2xl font-medium text-accent-100">
                Over 20 Years of Excellence in Travel Services
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Since 2002, Pune Travelers has been the go-to choice for reliable and comfortable transportation
              in Pune and across Maharashtra. We've built our reputation on trust, punctuality, and exceptional
              customer service.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From school trips to corporate events and wedding celebrations, we provide specialized
              transportation solutions with professional drivers and well-maintained vehicles.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">20+ Years Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Two decades of proven track record in providing exceptional travel services across Pune and Maharashtra.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Professional Drivers</h3>
              <p className="text-gray-600 leading-relaxed">
                Verified, trained, and experienced drivers who prioritize your safety and comfort throughout the journey.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Reliable Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Punctual, dependable, and consistent service that you can count on for all your travel needs.
              </p>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-md">
              <div className="bg-primary-100 p-3 rounded-full">
                <Shield className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Fully Insured</h4>
                <p className="text-sm text-gray-600">Complete insurance coverage</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-md">
              <div className="bg-primary-100 p-3 rounded-full">
                <ThumbsUp className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Customer First</h4>
                <p className="text-sm text-gray-600">Your satisfaction is our priority</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-md">
              <div className="bg-primary-100 p-3 rounded-full">
                <Clock className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">24/7 Available</h4>
                <p className="text-sm text-gray-600">Round the clock service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
