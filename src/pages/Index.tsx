import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";

const Index = () => {
  const [showPrivacyDialog, setShowPrivacyDialog] = useState(false);
  const [showCheckoutDialog, setShowCheckoutDialog] = useState(false);
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"yearly" | "lifetime" | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");
    if (!hasSeenWelcome) {
      setTimeout(() => {
        setShowWelcomeDialog(true);
        localStorage.setItem("hasSeenWelcome", "true");
      }, 1500); // Delay to let the page load first
    }
  }, []);

  const handleCheckout = (plan: "yearly" | "lifetime") => {
    setSelectedPlan(plan);
    setShowCheckoutDialog(true);
  };

  const handlePurchase = () => {
    toast({
      title: "Purchase Successful!",
      description: "Check your email for further instructions.",
    });
    setShowCheckoutDialog(false);
  };

  const scrollToPricing = () => {
    setShowWelcomeDialog(false);
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-red-600 text-white p-6 text-center shadow-md">
        <h1 className="text-3xl font-bold">McAfee Premium Family Protection</h1>
      </header>
      <section className="relative text-white text-center py-24" 
               style={{ background: "linear-gradient(rgba(220,38,38,0.9), rgba(220,38,38,0.9))" }}>
        <img
          src="https://storage.googleapis.com/a1aa/image/UXVuaGo-lzbFqZ5Pw59k9tybwwNSwqWYsdJHOj-rae0.jpg"
          alt="Background image showing a family using various devices"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">Complete Family Security Solution</h2>
          <p className="text-xl mb-8">
            Protect your entire family with our comprehensive security suite. Now offering two flexible
            plans: Annual subscription at $99.99 or one-time lifetime payment at $89.99. Limited time
            offer - Get 30% off the annual plan today!
          </p>
          <button
            onClick={scrollToPricing}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-colors transform hover:scale-105 duration-200"
          >
            View Our Plans
          </button>
        </div>
      </section>
      <section className="py-24 bg-white">
        <h3 className="text-4xl font-bold text-center mb-12">Why Choose McAfee Family Plan?</h3>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
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
                  onClick={() => handleCheckout(plan.type as "yearly" | "lifetime")}
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
      <section className="py-24 bg-white">
        <h3 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h3>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg text-center">
              <img
                src={testimonial.image}
                alt={`Portrait of ${testimonial.name}`}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <p>{testimonial.quote}</p>
              <p className="font-bold mt-4">- {testimonial.name}, Verified User</p>
            </div>
          ))}
        </div>
      </section>
      <footer className="bg-red-600 text-white text-center py-6">
        <p>
          © 2024 McAfee. All rights reserved. |{" "}
          <button
            onClick={() => setShowPrivacyDialog(true)}
            className="underline hover:text-gray-200 transition-colors"
          >
            Privacy Policy
          </button>
        </p>
      </footer>
      <Dialog open={showPrivacyDialog} onOpenChange={setShowPrivacyDialog}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Privacy Policy</DialogTitle>
            <DialogDescription className="text-gray-600">
              Last updated: March 2024
            </DialogDescription>
            <button
              onClick={() => setShowPrivacyDialog(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <PrivacyContent />
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={showCheckoutDialog} onOpenChange={setShowCheckoutDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Complete Your Order</DialogTitle>
            <DialogDescription className="text-gray-600">
              You're just one step away from protecting your family
            </DialogDescription>
            <button
              onClick={() => setShowCheckoutDialog(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </DialogHeader>
          <div className="mt-4">
            <table className="w-full border-collapse mb-8">
              <thead>
                <tr className="bg-gray-200">
                  <th className="text-left p-4">Product</th>
                  <th className="text-right p-4">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4">
                    <div className="font-semibold">McAfee Family Protection</div>
                    <div className="text-sm text-gray-600">
                      {selectedPlan === "yearly" ? "1 Year Subscription" : "Lifetime Access"}
                    </div>
                    {selectedPlan === "yearly" && (
                      <div className="text-green-600 text-sm font-semibold mt-1">
                        30% Welcome Discount Applied!
                      </div>
                    )}
                  </td>
                  <td className="text-right p-4">
                    {selectedPlan === "yearly" ? (
                      <div>
                        <span className="line-through text-gray-500">$99.99</span>
                        <div className="text-green-600 font-bold">$69.99</div>
                      </div>
                    ) : (
                      <div>$89.99</div>
                    )}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="border-t">
                  <th className="text-left p-4">Total</th>
                  <td className="text-right p-4 font-bold text-lg">
                    ${selectedPlan === "yearly" ? "69.99" : "89.99"}
                  </td>
                </tr>
              </tfoot>
            </table>
            <div className="bg-blue-100 p-4 rounded-lg mb-8">
              <h3 className="text-blue-800 font-bold mb-2">📧 Digital Delivery Information</h3>
              <p className="text-blue-700">
                Your license key and download instructions will be sent to your email address immediately after purchase.
              </p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handlePurchase}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 duration-200"
              >
                Complete Purchase
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={showWelcomeDialog} onOpenChange={setShowWelcomeDialog}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              🎉 Exclusive Welcome Offer!
            </DialogTitle>
            <button
              onClick={() => setShowWelcomeDialog(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </DialogHeader>
          <div className="mt-4 text-center">
            <div className="bg-red-50 p-6 rounded-lg mb-4">
              <h3 className="text-3xl font-bold text-red-600 mb-2">Save 30% Today!</h3>
              <p className="text-gray-700 mb-4">
                Subscribe to our annual plan now and get premium protection for your entire family at an incredible discount!
              </p>
              <div className="text-2xl font-bold text-red-600 mb-4">
                <span className="line-through text-gray-500">$99.99</span>
                <span className="ml-2">$69.99/year</span>
              </div>
              <button
                onClick={scrollToPricing}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 duration-200"
              >
                Claim Discount Now
              </button>
            </div>
            <p className="text-sm text-gray-500">
              *Limited time offer. Discount applies to first year only.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const features = [
  {
    title: "Advanced Protection",
    description: "Keep your devices safe from viruses, malware, and online threats with our industry-leading security engine.",
  },
  {
    title: "Privacy First",
    description: "Enhanced privacy features including VPN service and secure browsing to protect your personal data.",
  },
  {
    title: "Multi-Device Support",
    description: "Protect unlimited devices with one subscription - perfect for families with multiple computers, phones, and tablets.",
  },
  {
    title: "Optimized Performance",
    description: "Our lightweight security solution ensures your devices run smoothly without compromising protection.",
  },
  {
    title: "24/7 Customer Support",
    description: "Access our dedicated premium support team anytime, anywhere, with priority response times.",
  },
  {
    title: "Identity Theft Protection",
    description: "Advanced identity monitoring and alerts to protect your personal information from theft and fraud.",
  },
];

const plans = [
  {
    type: "yearly",
    description: "Save big with our annual subscription! Get premium protection for unlimited devices with our most popular plan. Includes VPN service and identity protection at only",
    price: "99.99",
  },
  {
    type: "lifetime",
    description: "One-time payment for lifetime protection! Get all premium features forever with no recurring charges at only",
    price: "89.99",
  },
];

const testimonials = [
  {
    name: "Sarah L.",
    quote: "McAfee has been a lifesaver! I feel secure knowing all our family devices are protected.",
    image: "https://storage.googleapis.com/a1aa/image/qEVZhxzZ9Ik1kAlHcOQiQpSvSxvhWf_zwjK4Ce2PWN4.jpg",
  },
  {
    name: "John D.",
    quote: "The setup was seamless, and now all our devices are secure. Highly recommended!",
    image: "https://storage.googleapis.com/a1aa/image/NDLKyBMUaptvrBieksu2fZCETEUWwEbLuF8mVSONlyY.jpg",
  },
  {
    name: "Emily K.",
    quote: "Exceptional security and peace of mind for the entire family. A must-have subscription!",
    image: "https://storage.googleapis.com/a1aa/image/Y-09LNkV_EDixOUG-iLukcduy3OAUzFrfz2LPH7UUHo.jpg",
  },
  {
    name: "Michael T.",
    quote: "Great value for the features offered. McAfee has exceeded my expectations.",
    image: "https://storage.googleapis.com/a1aa/image/kwDjgktleWPB6n0BKHqcgj0MFTQ46cviOkdvg2uNRoI.jpg",
  },
];

const PrivacyContent = () => (
  <div className="space-y-4">
    <p>
      Enlighty website (
      <a href="https://www.enlighty.shop" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        www.enlighty.shop
      </a>
      ) is made by Enlighty Systems, Inc. Welcome to the Enlighty website at all times.
    </p>
    <h3 className="text-2xl font-bold mt-4">7. Governing Law and Jurisdiction</h3>
    <p>
      These Terms of Use are governed by the laws of R.O.C. (Taiwan), and disputes will be resolved in the Taipei District Court.
    </p>
    <ul className="list-disc list-inside space-y-2">
      <li>We collect data to improve your experience and provide better services.</li>
      <li>We do not share your data with third parties without your consent.</li>
      <li>For more information, contact us at privacy@mcafee.com.</li>
    </ul>
  </div>
);

export default Index;
