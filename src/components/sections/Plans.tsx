import { useTranslation } from 'react-i18next';
import { useCurrency } from '@/hooks/useCurrency';

interface PlanProps {
  type: "yearly" | "lifetime" | "basic";
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  checkoutUrl: string;
  deviceLimit?: number;
}

interface PlansProps {
  plans: PlanProps[];
  onCheckout: (plan: "yearly" | "lifetime" | "basic") => void;
}

export const Plans = ({ plans, onCheckout }: PlansProps) => {
  const { t } = useTranslation();
  const { formatPrice } = useCurrency();

  const getPlanName = (planType: "yearly" | "lifetime" | "basic") => {
    switch (planType) {
      case "yearly":
        return t('plans.yearly');
      case "lifetime":
        return t('plans.lifetime');
      case "basic":
        return t('plans.basic');
      default:
        return "";
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="pricing">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6">
            {t('plans.title')}
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('plans.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.type} className="relative bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-2xl font-bold mb-4">{getPlanName(plan.type)}</h4>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold">{formatPrice(plan.price)}</span>
                {plan.type === "lifetime" ? (
                  <span className="text-gray-600">/month</span>
                ) : (
                  <span className="text-gray-600">/year</span>
                )}
              </div>
              {plan.originalPrice && (
                <div className="flex items-center gap-2 mb-4">
                  <span className="line-through text-gray-500">
                    {formatPrice(plan.originalPrice)}
                  </span>
                  {plan.discount && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                      {t('plans.save')} {plan.discount}%
                    </span>
                  )}
                </div>
              )}
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <button
                onClick={() => onCheckout(plan.type)}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t('plans.getProtected')}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="font-bold text-gray-700">
            Secure payment powered by industry leaders • 30-day money-back guarantee • 24/7 support
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <img src="https://storage.googleapis.com/a1aa/image/visa.png" alt="Visa" className="h-8 opacity-75" />
            <img src="https://storage.googleapis.com/a1aa/image/mastercard.png" alt="Mastercard" className="h-8 opacity-75" />
            <img src="https://storage.googleapis.com/a1aa/image/amex.png" alt="American Express" className="h-8 opacity-75" />
          </div>
        </div>
      </div>
    </section>
  );
};
