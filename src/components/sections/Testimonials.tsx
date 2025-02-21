
interface Testimonial {
  name: string;
  quote: string;
  image: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials = ({ testimonials }: TestimonialsProps) => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <h3 className="text-4xl font-bold text-center mb-4">What Our Customers Say</h3>
      <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Join thousands of satisfied families who trust McAfee to protect their digital lives
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 relative">
                <img
                  src={testimonial.image}
                  alt={`Portrait of ${testimonial.name}`}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div className="absolute -bottom-2 -right-2 bg-red-600 text-white p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-gray-700 italic leading-relaxed">{testimonial.quote}</p>
              </div>
              <div className="mt-auto">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-red-600">Verified Customer</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-gray-600 font-medium">
          Trusted by over 100,000+ families worldwide
        </p>
        <div className="flex justify-center items-center gap-2 mt-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className="w-6 h-6 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          ))}
          <span className="ml-2 font-bold text-gray-700">4.9/5</span>
        </div>
      </div>
    </div>
  </section>
);
