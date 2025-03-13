
import { useTranslation } from 'react-i18next';
import { useCurrency } from '@/hooks/useCurrency';

interface Plan {
  type: "yearly" | "lifetime" | "basic";
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  checkoutUrl: string;
  deviceLimit?: number;
}

interface PlansProps {
  plans: Plan[];
  onCheckout: (plan: "yearly" | "lifetime" | "basic") => void;
}

export const Plans = ({ plans, onCheckout }: PlansProps) => {
  const { t } = useTranslation();
  const { formatPrice } = useCurrency();

  const getPlanName = (type: "yearly" | "lifetime" | "basic") => {
    switch (type) {
      case "yearly":
        return t('plans.advanced.name');
      case "lifetime":
        return t('plans.lifetime.name');
      case "basic":
        return t('plans.basic.name');
      default:
        return '';
    }
  };

  const getPlanDescription = (type: "yearly" | "lifetime" | "basic") => {
    switch (type) {
      case "yearly":
        return t('plans.advanced.description');
      case "lifetime":
        return t('plans.lifetime.description');
      case "basic":
        return t('plans.basic.description');
      default:
        return '';
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="pricing">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      <img
        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-5"
      />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
            {t('plans.title')}
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('plans.subtitle')}
          </p>
          <div className="mt-4 inline-block bg-green-100 text-green-800 px-6 py-2 rounded-full font-semibold text-lg animate-pulse">
            One-time payment only - No monthly subscriptions!
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.type}
              className={`relative overflow-hidden rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-2 w-full md:max-w-md
                ${plan.type === "yearly" 
                  ? 'bg-gradient-to-br from-white via-white to-blue-50 border-2 border-[#1652F0] shadow-2xl' 
                  : plan.type === "lifetime"
                    ? 'bg-gradient-to-br from-white via-white to-emerald-50 border-2 border-emerald-600 shadow-xl'
                    : 'bg-gradient-to-br from-white via-white to-purple-50 border-2 border-purple-600 shadow-xl'}`}
            >
              {plan.type === "yearly" && (
                <div className="absolute -top-3 left-0 w-full flex justify-center z-10">
                  <div className="bg-gradient-to-r from-[#1652F0] to-blue-600 text-white px-6 py-1.5 rounded-full font-semibold text-sm shadow-lg animate-pulse">
                    Most Popular Choice
                  </div>
                </div>
              )}

              <div className="p-8 pt-12 relative z-0">
                <h4 className={`text-2xl font-bold mb-4 ${
                  plan.type === "yearly" 
                    ? 'text-[#1652F0]' 
                    : plan.type === "lifetime"
                      ? 'text-emerald-600'
                      : 'text-purple-600'
                }`}>
                  {getPlanName(plan.type)}
                </h4>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className={`text-6xl font-bold ${
                      plan.type === "yearly" 
                        ? 'text-[#1652F0]' 
                        : plan.type === "lifetime"
                          ? 'text-emerald-600'
                          : 'text-purple-600'
                    }`}>
                      {formatPrice(plan.price)}
                    </span>
                    <span className="text-gray-600">
                      {"/year"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="line-through text-gray-500 text-lg">
                      {formatPrice(plan.originalPrice || '0')}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold animate-pulse ${
                      plan.type === "yearly"
                        ? 'bg-blue-100 text-[#1652F0]'
                        : plan.type === "lifetime"
                          ? 'bg-emerald-100 text-emerald-600'
                          : 'bg-purple-100 text-purple-600'
                    }`}>
                      {t('plans.save')} {plan.discount}%
                    </span>
                  </div>
                  <div className="mt-3 text-green-600 font-semibold inline-block border border-green-200 bg-green-50 px-3 py-1 rounded-lg">
                    One-time payment only
                  </div>
                </div>

                <p className="text-gray-600 mb-8 min-h-[80px]">
                  {getPlanDescription(plan.type)}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</span>
                    <span className="text-gray-700">
                      {plan.deviceLimit ? `Protection for up to ${plan.deviceLimit} devices` : 'Unlimited Device Protection'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</span>
                    <span className="text-gray-700">Advanced Antivirus Security</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</span>
                    <span className="text-gray-700">Identity Theft Protection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</span>
                    <span className="text-gray-700">VPN Service Included</span>
                  </div>
                </div>

                <button
                  onClick={() => onCheckout(plan.type)}
                  className={`w-full font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    plan.type === "yearly"
                      ? 'bg-gradient-to-r from-[#1652F0] to-blue-600 hover:from-blue-600 hover:to-[#1652F0] text-white shadow-lg hover:shadow-xl'
                      : plan.type === "lifetime"
                        ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl'
                        : 'bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-600 text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  {t('plans.getProtected')}
                </button>

                <p className={`text-sm mt-4 text-center ${
                  plan.type === "yearly"
                    ? 'text-[#1652F0]'
                    : plan.type === "lifetime"
                      ? 'text-emerald-600'
                      : 'text-purple-600'
                }`}>
                  {plan.type === "lifetime"
                    ? t('plans.lifetime.pricelock', { price: formatPrice('14.99') })
                    : t('plans.savings', {
                        amount: formatPrice((Number(plan.originalPrice) - Number(plan.price)).toFixed(2))
                      })}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-6 mb-4">
            <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" alt="Security" className="w-12 h-12 object-cover rounded-full opacity-50" />
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475" alt="Technology" className="w-12 h-12 object-cover rounded-full opacity-50" />
          </div>
          <p className="text-gray-500 text-sm">
            Secure payment powered by industry leaders • 30-day money-back guarantee • 24/7 support
          </p>
        </div>
      </div>
    </section>
  );
};
