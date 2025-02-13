
import { FC } from 'react';
import { CheckCircle } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
}

interface FeaturesProps {
  features: Feature[];
}

export const Features: FC<FeaturesProps> = ({ features }) => {
  return (
    <section className="py-12 px-4 md:py-24 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          Why Choose McAfee Family Protection?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
