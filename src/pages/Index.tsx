import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { WelcomeDialog } from "@/components/dialogs/WelcomeDialog";
import { PrivacyDialog } from "@/components/dialogs/PrivacyDialog";
import { CheckoutDialog } from "@/components/dialogs/CheckoutDialog";
import { Features } from "@/components/sections/Features";
import { Plans } from "@/components/sections/Plans";
import { Testimonials } from "@/components/sections/Testimonials";

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

type Plan = {
  type: "yearly" | "lifetime";
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  checkoutUrl: string;
};

const plans: Plan[] = [
  {
    type: "yearly",
    description: "Get our best value with the annual plan! Protect unlimited devices with our premium security suite including VPN and identity protection.",
    price: "69.99",
    originalPrice: "149.99",
    discount: "53",
    checkoutUrl: "https://whop.com/checkout/plan_Bt5X2CeIk70aY?d2c=true"
  },
  {
    type: "lifetime",
    description: "Flexible monthly protection for unlimited devices. Includes all premium security features and regular updates.",
    price: "14.99",
    checkoutUrl: "https://whop.com/checkout/plan_06H1H01NqO1ue?d2c=true"
  }
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

const Index = () => {
  const [showPrivacyDialog, setShowPrivacyDialog] = useState(false);
  const [showCheckoutDialog, setShowCheckoutDialog] = useState(false);
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"yearly" | "lifetime" | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");
    
    if (!hasSeenWelcome) {
      const timer = setTimeout(() => {
        setShowWelcomeDialog(true);
        localStorage.setItem("hasSeenWelcome", "true");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleCheckout = (plan: "yearly" | "lifetime") => {
    const selectedPlanData = plans.find(p => p.type === plan);
    if (selectedPlanData?.checkoutUrl) {
      window.location.href = selectedPlanData.checkoutUrl;
    }
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
            plans: Annual subscription at $149.99 or monthly plan at $14.99. Limited time
            offer - Get 53% off the annual plan today!
          </p>
          <button
            onClick={scrollToPricing}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-colors transform hover:scale-105 duration-200"
          >
            View Our Plans
          </button>
        </div>
      </section>

      <Features features={features} />
      <Plans plans={plans} onCheckout={handleCheckout} />
      <Testimonials testimonials={testimonials} />

      <footer className="bg-red-600 text-white text-center py-6">
        <p>
          © 2024 McAfee. All rights reserved.{" "}
          <button
            onClick={() => setShowPrivacyDialog(true)}
            className="underline hover:text-gray-200 transition-colors focus:outline-none"
            type="button"
            aria-label="Open Privacy Policy"
          >
            Privacy Policy
          </button>
        </p>
      </footer>

      <WelcomeDialog
        open={showWelcomeDialog}
        onOpenChange={setShowWelcomeDialog}
        onScrollToPricing={scrollToPricing}
      />

      <PrivacyDialog
        open={showPrivacyDialog}
        onOpenChange={setShowPrivacyDialog}
      />

      <CheckoutDialog
        open={showCheckoutDialog}
        onOpenChange={setShowCheckoutDialog}
        selectedPlan={selectedPlan}
        onPurchase={handlePurchase}
      />
    </div>
  );
};

export default Index;
