
interface Plan {
  type: "yearly" | "lifetime";
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  checkoutUrl: string;
}

interface PlansProps {
  plans: Plan[];
  onCheckout: (plan: "yearly" | "lifetime") => void;
}

export const Plans = ({ plans, onCheckout }: PlansProps) => (
  <section className="py-24 bg-gradient-to-b from-gray-100 to-white" id="pricing">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h3 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
          Choose Your Protection Plan
        </h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get complete peace of mind with our comprehensive security suite. Both plans offer identical premium features and protect unlimited devices.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div 
            key={plan.type}
            className={`relative overflow-hidden rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-2
              ${plan.type === "yearly" ? 'bg-gradient-to-br from-blue-50 via-white to-blue-50 border-2 border-[#1652F0] shadow-2xl' : 'bg-white border border-gray-200 shadow-xl'}`}
          >
            {plan.type === "yearly" && (
              <div className="absolute -top-3 left-0 w-full flex justify-center">
                <div className="bg-gradient-to-r from-[#1652F0] to-blue-600 text-white px-6 py-1.5 rounded-full font-semibold text-sm shadow-lg">
                  Most Popular Choice
                </div>
              </div>
            )}

            <div className="p-8 pt-12">
              <h4 className={`text-2xl font-bold mb-4 ${plan.type === "yearly" ? 'text-[#1652F0]' : 'text-gray-900'}`}>
                {plan.type === "yearly" ? "Annual Protection Plan" : "Monthly Protection Plan"}
              </h4>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className={`text-5xl font-bold ${plan.type === "yearly" ? 'text-[#1652F0]' : 'text-gray-900'}`}>
                    ${plan.price}
                  </span>
                  <span className="text-gray-600">
                    {plan.type === "yearly" ? "/year" : "/month"}
                  </span>
                </div>
                {plan.originalPrice && (
                  <div className="flex items-center gap-3 mt-2">
                    <span className="line-through text-gray-500 text-lg">${plan.originalPrice}</span>
                    <span className={`${plan.type === "yearly" ? 'bg-blue-100 text-[#1652F0]' : 'bg-gray-100 text-gray-800'} px-3 py-1 rounded-full text-sm font-semibold`}>
                      Save {plan.discount}%
                    </span>
                  </div>
                )}
              </div>

              <p className="text-gray-600 mb-8 min-h-[80px]">{plan.description}</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">✓</span>
                  <span className="text-gray-700">Unlimited Device Protection</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">✓</span>
                  <span className="text-gray-700">Advanced Antivirus Security</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">✓</span>
                  <span className="text-gray-700">Identity Theft Protection</span>
                </div>
                {plan.type === "yearly" && (
                  <>
                    <div className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">✓</span>
                      <span className="text-gray-700">Priority Customer Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">✓</span>
                      <span className="text-gray-700">$2M Identity Theft Coverage</span>
                    </div>
                  </>
                )}
              </div>

              <button
                onClick={() => onCheckout(plan.type)}
                className={`w-full font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105
                  ${plan.type === "yearly"
                    ? 'bg-gradient-to-r from-[#1652F0] to-blue-600 hover:from-blue-600 hover:to-[#1652F0] text-white shadow-lg hover:shadow-xl' 
                    : 'bg-gray-900 hover:bg-gray-800 text-white shadow-md hover:shadow-lg'}`}
              >
                {plan.type === "yearly" ? "Get Protected Now" : "Start Monthly Plan"}
              </button>

              {plan.discount && (
                <p className={`text-sm mt-4 text-center ${plan.type === "yearly" ? 'text-[#1652F0]' : 'text-gray-600'}`}>
                  Limited Time Offer - Save ${Number(plan.originalPrice) - Number(plan.price)} Today!
                </p>
              )}

              {plan.type === "yearly" && (
                <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#1652F0]">🔒</span>
                    <span className="text-sm font-semibold text-[#1652F0]">Annual Plan Benefits</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Maximum cost savings (53% off)</li>
                    <li>• Enterprise-grade security features</li>
                    <li>• Premium customer support access</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-500 text-sm">
          Secure payment powered by industry leaders • 30-day money-back guarantee • 24/7 support
        </p>
      </div>
    </div>
  </section>
);
