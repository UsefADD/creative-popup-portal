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
              ${plan.type === "yearly" 
                ? 'bg-gradient-to-br from-white via-white to-blue-50 border-2 border-[#1652F0] shadow-2xl' 
                : 'bg-gradient-to-br from-white via-white to-emerald-50 border-2 border-emerald-600 shadow-xl'}`}
          >
            {plan.type === "yearly" ? (
              <>
                <div className="absolute -top-3 left-0 w-full flex justify-center z-10">
                  <div className="bg-gradient-to-r from-[#1652F0] to-blue-600 text-white px-6 py-1.5 rounded-full font-semibold text-sm shadow-lg animate-pulse">
                    Most Popular Choice
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-40 h-40 -mr-8 -mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                    alt="Security Visual"
                    className="w-full h-full object-cover opacity-10 rounded-full"
                  />
                </div>
              </>
            ) : (
              <div className="absolute -top-3 left-0 w-full flex justify-center z-10">
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-1.5 rounded-full font-semibold text-sm shadow-lg">
                  Limited Time Offer
                </div>
              </div>
            )}

            <div className="p-8 pt-12 relative z-0">
              <h4 className={`text-2xl font-bold mb-4 ${plan.type === "yearly" ? 'text-[#1652F0]' : 'text-emerald-600'}`}>
                {plan.type === "yearly" ? "Annual Protection Plan" : "Lifetime Price-Lock Plan"}
              </h4>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className={`text-6xl font-bold ${plan.type === "yearly" ? 'text-[#1652F0]' : 'text-emerald-600'}`}>
                    ${plan.type === "yearly" ? plan.price : "14.99"}
                  </span>
                  <span className="text-gray-600">
                    {plan.type === "yearly" ? "/year" : "/month"}
                  </span>
                </div>
                {plan.type === "yearly" ? (
                  <div className="flex items-center gap-3 mt-2">
                    <span className="line-through text-gray-500 text-lg">${plan.originalPrice}</span>
                    <span className="bg-blue-100 text-[#1652F0] px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                      Save {plan.discount}%
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 mt-2">
                    <span className="line-through text-gray-500 text-lg">$39.99</span>
                    <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                      Save 62%
                    </span>
                  </div>
                )}
              </div>

              <p className="text-gray-600 mb-8 min-h-[80px]">
                {plan.type === "yearly" 
                  ? plan.description 
                  : "Lock in our lowest monthly rate forever! Subscribe now to secure this special price that will never increase for the lifetime of your subscription."}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</span>
                  <span className="text-gray-700">Unlimited Device Protection</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</span>
                  <span className="text-gray-700">Advanced Antivirus Security</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</span>
                  <span className="text-gray-700">Identity Theft Protection</span>
                </div>
                {plan.type === "yearly" && (
                  <>
                    <div className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</span>
                      <span className="text-gray-700">Priority Customer Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</span>
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
                    : 'bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl'}`}
              >
                {plan.type === "yearly" ? "Get Protected Now" : "Lock In This Price Now"}
              </button>

              {plan.type === "yearly" ? (
                <p className="text-sm mt-4 text-center text-[#1652F0]">
                  Limited Time Offer - Save ${Number(plan.originalPrice) - Number(plan.price)} Today!
                </p>
              ) : (
                <p className="text-sm mt-4 text-center text-emerald-600">
                  Never pay more than $14.99/month - Price locked for life!
                </p>
              )}

              {plan.type === "yearly" ? (
                <div className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#1652F0]">🔒</span>
                    <span className="text-sm font-semibold text-[#1652F0]">Annual Plan Benefits</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-[#1652F0]">•</span>
                      <span>Maximum cost savings (53% off)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#1652F0]">•</span>
                      <span>Enterprise-grade security features</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#1652F0]">•</span>
                      <span>Premium customer support access</span>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="mt-6 p-4 bg-gradient-to-br from-emerald-50 to-white rounded-xl border border-emerald-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-emerald-600">🔒</span>
                    <span className="text-sm font-semibold text-emerald-600">Lifetime Price-Lock Benefits</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-600">•</span>
                      <span>Price locked at $14.99/month forever</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-600">•</span>
                      <span>Save $300/year compared to regular price</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-600">•</span>
                      <span>Cancel anytime, no commitment</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-50 to-transparent opacity-50"></div>
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
