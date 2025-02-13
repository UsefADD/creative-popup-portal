
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
        <div key={index} className="mb-12 flex flex-col md:flex-row items-center justify-between gap-8 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-full md:w-1/2">
            <img
              src="https://media.mcafeeassets.com/content/dam/npcld/ecommerce/en-us/mcafee-redesign/radio-hero/family-662.png"
              alt="McAfee Premium Family Protection features"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-8">
            <h4 className="text-2xl font-bold mb-4">
              {index === 0 ? "Annual Protection Plan" : "Monthly Protection Plan"}
            </h4>
            <p className="text-gray-600 mb-6">{plan.description}</p>
            <div className="mb-6">
              {plan.originalPrice ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-red-600">${plan.price}</span>
                    <span className="text-sm text-gray-500">{index === 0 ? "per year" : "per month"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="line-through text-gray-500">${plan.originalPrice}</span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-semibold">
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
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 duration-200"
            >
              Get Protected Now
            </button>
            {plan.discount && (
              <p className="text-sm text-green-600 mt-4">
                Limited Time: Get {plan.discount}% off - Save ${Number(plan.originalPrice) - Number(plan.price)} Today!
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);
