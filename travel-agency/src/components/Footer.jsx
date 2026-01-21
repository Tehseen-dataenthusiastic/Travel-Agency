import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-accent-400 mb-4">Pune Travelers</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Your trusted travel partner since 2002. Providing safe, comfortable, and reliable transportation services across Pune and Maharashtra.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-white/10 hover:bg-accent-500 p-2 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-accent-500 p-2 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-accent-500 p-2 rounded-full transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-accent-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-accent-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('fleet')}
                  className="text-gray-400 hover:text-accent-400 transition-colors"
                >
                  Our Fleet
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-accent-400 transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>School Trips</li>
              <li>Corporate Travel</li>
              <li>Wedding Transportation</li>
              <li>Airport Transfers</li>
              <li>Outstation Trips</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-accent-400 flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:+919822999865" className="hover:text-accent-400 transition-colors">
                    +91 9822999865
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-accent-400 flex-shrink-0 mt-1" />
                <div>
                  <a href="mailto:manojtravels592@gmail.com" className="hover:text-accent-400 transition-colors">
                    manojtravels592@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-accent-400 flex-shrink-0 mt-1" />
                <div>Pune, Maharashtra, India</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} Pune Travelers. All rights reserved. | Working Since 2002
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-accent-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
