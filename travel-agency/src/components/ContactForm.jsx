import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    vehicleType: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const vehicleTypes = ['Swift Dzire', 'Innova Crysta', 'Tempo Traveller', 'Tata Winger AC','Luxury Bus', 'Any'];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Phone number must be exactly 10 digits';
    }

    if (!formData.pickup.trim()) {
      newErrors.pickup = 'Pickup location is required';
    }

    if (!formData.vehicleType) {
      newErrors.vehicleType = 'Please select a vehicle type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    if (!validateForm()) {
      setStatus({ type: 'error', message: 'Please fix the errors above' });
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.name,
        phone: formData.phone,
        pickup_location: formData.pickup,
        vehicle_type: formData.vehicleType,
        message: formData.message || 'No additional message',
      };

      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      if (result.status === 200) {
        setStatus({
          type: 'success',
          message: 'Thank you! We will contact you shortly.'
        });
        setFormData({
          name: '',
          phone: '',
          pickup: '',
          vehicleType: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try calling us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-14 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary-700 mb-4">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Fill out the form below and we'll get back to you as soon as possible
        </p>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <span className="text-2xl mb-2 block">📞</span>
              <p className="text-sm text-gray-600">Phone</p>
              <p className="font-semibold text-gray-800 text-sm">
                +91 9822234911
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center col-span-2">
              <span className="text-2xl mb-2 block">📧</span>
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-semibold text-gray-800 text-sm whitespace-nowrap">
                manojtravels592@gmail.com
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <span className="text-2xl mb-2 block">📍</span>
              <p className="text-sm text-gray-600">Location</p>
              <p className="font-semibold text-gray-800 text-sm">Pune, Maharashtra</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            {/* Status Messages */}
            {status.message && (
              <div
                className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  status.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {status.type === 'success' ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <AlertCircle className="w-5 h-5" />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="10 digit mobile number"
                  maxLength="10"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Pickup Location Field */}
              <div>
                <label htmlFor="pickup" className="block text-gray-700 font-medium mb-2">
                  Pickup Location *
                </label>
                <input
                  type="text"
                  id="pickup"
                  name="pickup"
                  value={formData.pickup}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    errors.pickup ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter pickup address"
                />
                {errors.pickup && (
                  <p className="text-red-500 text-sm mt-1">{errors.pickup}</p>
                )}
              </div>

              {/* Vehicle Type Field */}
              <div>
                <label htmlFor="vehicleType" className="block text-gray-700 font-medium mb-2">
                  Vehicle Type *
                </label>
                <select
                  id="vehicleType"
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    errors.vehicleType ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select vehicle</option>
                  {vehicleTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.vehicleType && (
                  <p className="text-red-500 text-sm mt-1">{errors.vehicleType}</p>
                )}
              </div>
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Additional details about your trip..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Inquiry
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
