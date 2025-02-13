
interface Feature {
  title: string;
  description: string;
}

interface FeaturesProps {
  features: Feature[];
}

export const Features = ({ features }: FeaturesProps) => (
  <section className="py-24 bg-white">
    <h3 className="text-4xl font-bold text-center mb-12">Why Choose McAfee Family Plan?</h3>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {features.map((feature, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
);
