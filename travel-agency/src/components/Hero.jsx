const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background Image - Shaniwar Wada */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-accent-900/80"></div>
      </div>

      {/* Animated particles effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-6 animate-fade-in-down">
          <span className="text-accent-400 text-sm font-semibold">★★★★★</span>
          <span className="text-sm">Trusted Since 2002</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
          Premium Travel Services
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
            Across Pune & Beyond
          </span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-gray-100 leading-relaxed animate-fade-in-up animation-delay-200">
          Experience luxury, comfort, and reliability with our 20+ years of trusted service.
          Professional drivers, well-maintained vehicles, and punctual service guaranteed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="group bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-accent-500/50 flex items-center gap-2"
          >
            Book Your Ride Now
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          <a
            href="tel:+919822234911"
            className="bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 transform hover:scale-105 transition-transform">
            <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-1">20+</div>
            <div className="text-sm md:text-base text-gray-200">Years Experience</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 transform hover:scale-105 transition-transform">
            <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-1">₹15</div>
            <div className="text-sm md:text-base text-gray-200">Per KM Starting</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 transform hover:scale-105 transition-transform">
            <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-1">24/7</div>
            <div className="text-sm md:text-base text-gray-200">Service Available</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 transform hover:scale-105 transition-transform">
            <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-1">500+</div>
            <div className="text-sm md:text-base text-gray-200">Happy Customers</div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
