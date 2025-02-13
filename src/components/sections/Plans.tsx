
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
            ${index === 0 ? 'border-2 border-purple-500' : ''}`}
        >
          {index === 0 && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-6 py-1 rounded-full font-semibold text-sm">
              Most Popular Choice
            </div>
          )}
          <div className="w-full md:w-1/2">
            <img
              src={index === 0 
                ? "https://media.mcafeeassets.com/content/dam/npcld/ecommerce/en-us/mcafee-redesign/radio-hero/family-662.png"
                : "/lovable-uploads/afbd1709-000b-4a46-8375-15f18d5fc453.png"
              }
              alt="McAfee Premium Family Protection features"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className={`w-full md:w-1/2 p-8 ${index === 0 ? 'bg-purple-50' : ''}`}>
            <h4 className={`text-2xl font-bold mb-4 ${index === 0 ? 'text-purple-800' : ''}`}>
              {index === 0 ? (
                <div className="flex items-center gap-2">
                  Annual Protection Plan
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                    Best Value
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
                    <span className={`text-3xl font-bold ${index === 0 ? 'text-purple-600' : 'text-red-600'}`}>
                      ${plan.price}
                    </span>
                    <span className="text-sm text-gray-500">{index === 0 ? "per year" : "per month"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="line-through text-gray-500">${plan.originalPrice}</span>
                    <span className={`${index === 0 ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700'} px-2 py-1 rounded-full text-sm font-semibold`}>
                      Save {plan.discount}%
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-red-600">${plan.price}</span>
                  <span className="text-sm text-gray-500">{index === 0 ? "per year" : "per month"}</span>
                </div>
              )}
            </div>
            <button
              onClick={() => onCheckout(plan.type)}
              className={`w-full font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 duration-200 
                ${index === 0 
                  ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg' 
                  : 'bg-green-500 hover:bg-green-600 text-white'}`}
            >
              {index === 0 ? "Get Best Value Now" : "Get Protected Now"}
            </button>
            {plan.discount && (
              <p className={`text-sm mt-4 ${index === 0 ? 'text-purple-600' : 'text-green-600'}`}>
                Limited Time: Get {plan.discount}% off - Save ${Number(plan.originalPrice) - Number(plan.price)} Today!
              </p>
            )}
            {index === 0 && (
              <div className="mt-6 p-4 bg-purple-100 rounded-lg">
                <p className="text-sm text-purple-700 font-medium">
                  ✓ Most popular choice among families
                  <br />
                  ✓ Best value for your money
                  <br />
                  ✓ Includes all premium features
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);
