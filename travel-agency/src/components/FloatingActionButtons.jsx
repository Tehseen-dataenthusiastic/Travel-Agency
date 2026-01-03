import { MessageCircle, Phone } from 'lucide-react';

const FloatingActionButtons = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '919999999999';
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER || '+919999999999';

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-16 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          WhatsApp
        </span>
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="bg-primary-600 hover:bg-primary-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-16 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Call Now
        </span>
      </a>
    </div>
  );
};

export default FloatingActionButtons;
