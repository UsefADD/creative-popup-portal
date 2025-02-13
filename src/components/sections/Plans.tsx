
interface Plan {
  type: "yearly" | "lifetime";
  description: string;
  price: string;
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
              src="https://storage.googleapis.com/a1aa/image/F3PyC2QSb-V5v8pbkEFqHZZtud8hlQSmgDknRG7YCNk.jpg"
              alt="McAfee protection on various devices"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-8">
            <h4 className="text-2xl font-bold mb-4">
              {plan.type === "yearly" ? "Annual Protection Plan" : "Lifetime Protection Plan"}
            </h4>
            <p className="text-gray-600 mb-6">{plan.description}</p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-red-600">${plan.price}</span>
              {plan.type === "yearly" && (
                <span className="text-sm text-gray-500 ml-2">per year</span>
              )}
            </div>
            <button
              onClick={() => onCheckout(plan.type)}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 duration-200"
            >
              Get Protected Now
            </button>
            {plan.type === "yearly" && (
              <p className="text-sm text-green-600 mt-4">
                Limited Time: Get 30% off - Save $30 Today!
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);
