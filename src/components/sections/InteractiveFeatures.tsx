
import { useState } from 'react';

const features = [
  {
    id: 'ai',
    title: 'AI-Powered Antivirus and Text Scam Detector',
    description: 'Get real-time protection against viruses, hackers, and risky links with McAfee\'s advanced technology.',
    image: 'https://media.mcafeeassets.com/content/dam/npcld/ecommerce/en-us/mcafee-redesign/homepage/ai-rtb-img1-fixed.png'
  },
  {
    id: 'privacy',
    title: 'Advanced Privacy Protection',
    description: 'Keep your personal info private on public Wi-Fi with Secure VPN, and take back your data from sites that sell it with Personal Data Cleanup.',
    image: 'https://media.mcafeeassets.com/content/dam/npcld/ecommerce/en-us/mcafee-redesign/homepage/RTB%20image%201_%20desktop.png'
  },
  {
    id: 'identity',
    title: 'Identity and Financial Protection',
    description: 'Secure your finances and data from identity theft with 24/7 monitoring, plus up to $2 million in identity theft coverage and recovery assistance from US-based identity experts.',
    image: 'https://media.mcafeeassets.com/content/dam/npcld/ecommerce/en-us/mcafee-redesign/homepage/RTB%20image%202_%20desktop.png'
  },
  {
    id: 'family',
    title: 'Protection For Your Whole Family',
    description: 'Enjoy personalized protection tailored to the needs of up to 6 family members (up to 2 adults and 4 children under 18).',
    image: 'https://media.mcafeeassets.com/content/dam/npcld/ecommerce/en-us/mcafee-redesign/homepage/RTB%20image%204_%20desktop.png'
  }
];

export const InteractiveFeatures = () => {
  const [activeFeature, setActiveFeature] = useState('ai');

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Protect Your Everything with <span className="text-red-600">McAfee+</span>
        </h2>
        
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          <div className="lg:w-1/2 space-y-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`border-l-4 pl-4 cursor-pointer transition-all duration-300 hover:bg-gray-50 
                  ${activeFeature === feature.id ? 'border-red-600' : 'border-gray-300'}`}
                onClick={() => setActiveFeature(feature.id)}
              >
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300
                  ${activeFeature === feature.id ? 'text-red-600' : 'text-gray-700'}`}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              {features.map((feature) => (
                <img
                  key={feature.id}
                  src={feature.image}
                  alt={feature.title}
                  className={`w-full h-auto rounded-lg shadow-2xl transition-all duration-500 absolute top-0 left-0
                    ${activeFeature === feature.id 
                      ? 'opacity-100 transform scale-100 translate-y-0' 
                      : 'opacity-0 transform scale-95 translate-y-4'}`}
                  style={{
                    zIndex: activeFeature === feature.id ? 1 : 0,
                    pointerEvents: activeFeature === feature.id ? 'auto' : 'none'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
