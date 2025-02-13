
interface Plan {
  type: "yearly" | "lifetime";
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
}

interface PlansProps {
  plans: Plan[];
  onCheckout: (plan: "yearly" | "lifetime") => void;
}

export const Plans = ({ plans, onCheckout }: PlansProps) => (
  <section className="py-24 bg-gray-100" id="pricing">
    <h3 className="text-4xl font-bold text-center mb-6">Choose Your Protection Plan</h3>
    <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
      Select the plan that best fits your needs. Both plans include our complete suite of security features,
      protecting unlimited devices for your entire family.
    </p>
    <div className="max-w-5xl mx-auto px-4">
      {plans.map((plan, index) => (
        <div 
          key={index} 
          className={`mb-12 flex flex-col md:flex-row items-center justify-between gap-8 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative
            ${plan.type === "yearly" ? 'border-2 border-blue-600' : ''}`}
        >
          {plan.type === "yearly" && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-1 rounded-full font-semibold text-sm shadow-md">
              Recommended Plan
            </div>
          )}
          <div className="w-full md:w-1/2">
            <img
              src={plan.type === "yearly"
                ? "https://media.mcafeeassets.com/content/dam/npcld/ecommerce/en-us/mcafee-redesign/radio-hero/family-662.png"
                : "/lovable-uploads/afbd1709-000b-4a46-8375-15f18d5fc453.png"
              }
              alt="McAfee Premium Family Protection features"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className={`w-full md:w-1/2 p-8 ${plan.type === "yearly" ? 'bg-blue-50' : ''}`}>
            <h4 className={`text-2xl font-bold mb-4 ${plan.type === "yearly" ? 'text-blue-900' : ''}`}>
              {plan.type === "yearly" ? (
                <div className="flex items-center gap-2">
                  Annual Protection Plan
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Premium
                  </span>
                </div>
              ) : (
                "Monthly Protection Plan"
              )}
            </h4>
            <p className="text-gray-600 mb-6">{plan.description}</p>
            <div className="mb-6">
              {plan.originalPrice ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-3xl font-bold ${plan.type === "yearly" ? 'text-blue-700' : 'text-gray-900'}`}>
                      ${plan.price}
                    </span>
                    <span className="text-sm text-gray-500">{plan.type === "yearly" ? "per year" : "per month"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="line-through text-gray-500">${plan.originalPrice}</span>
                    <span className={`${plan.type === "yearly" ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'} px-2 py-1 rounded-full text-sm font-semibold`}>
                      Save {plan.discount}%
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-sm text-gray-500">{plan.type === "yearly" ? "per year" : "per month"}</span>
                </div>
              )}
            </div>
            <button
              onClick={() => onCheckout(plan.type)}
              className={`w-full font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 duration-200 
                ${plan.type === "yearly"
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg' 
                  : 'bg-gray-800 hover:bg-gray-900 text-white'}`}
            >
              {plan.type === "yearly" ? "Secure Your Family Now" : "Get Started"}
            </button>
            {plan.discount && (
              <p className={`text-sm mt-4 ${plan.type === "yearly" ? 'text-blue-700' : 'text-gray-600'}`}>
                Limited Time: Get {plan.discount}% off - Save ${Number(plan.originalPrice) - Number(plan.price)} Today!
              </p>
            )}
            {plan.type === "yearly" && (
              <div className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800 font-medium">
                  ✓ Enterprise-grade security features
                  <br />
                  ✓ Maximum cost savings
                  <br />
                  ✓ Priority customer support
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);
