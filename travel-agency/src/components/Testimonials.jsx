import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Sharma',
      role: 'Corporate Client',
      company: 'Tech Solutions Pvt Ltd',
      image: '/images/testimonials/client-1.jpg',
      text: 'We have been using Pune Travelers for our corporate events for the past 3 years. Their punctuality and professionalism are unmatched. Highly recommended!',
      rating: 5
    },
    {
      name: 'Priya Deshmukh',
      role: 'Wedding Client',
      company: 'December 2023 Wedding',
      image: '/images/testimonials/client-2.jpg',
      text: 'They handled all our wedding guest transportation flawlessly. The vehicles were decorated beautifully and all guests reached on time. Thank you for making our day special!',
      rating: 5
    },
    {
      name: 'Amit Patil',
      role: 'School Administrator',
      company: 'Bright Future School',
      image: '/images/testimonials/client-3.jpg',
      text: 'Safety is our top priority for school trips, and Pune Travelers exceeds our expectations every time. Verified drivers and well-maintained vehicles give us complete peace of mind.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 relative hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-accent-200">
                <Quote className="w-12 h-12" fill="currentColor" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-accent-500"
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-sm text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
            <div className="text-sm text-gray-600">Trips Completed</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-4xl font-bold text-primary-600 mb-2">4.9★</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">On-Time Service</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
