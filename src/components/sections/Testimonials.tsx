
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
    <h3 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h3>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-gray-100 p-6 rounded-lg text-center">
          <img
            src={testimonial.image}
            alt={`Portrait of ${testimonial.name}`}
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />
          <p>{testimonial.quote}</p>
          <p className="font-bold mt-4">- {testimonial.name}, Verified User</p>
        </div>
      ))}
    </div>
  </section>
);
