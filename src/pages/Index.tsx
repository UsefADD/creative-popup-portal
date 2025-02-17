import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { WelcomeDialog } from "@/components/dialogs/WelcomeDialog";
import { PrivacyDialog } from "@/components/dialogs/PrivacyDialog";
import { CheckoutDialog } from "@/components/dialogs/CheckoutDialog";
import { Features } from "@/components/sections/Features";
import { DetailedFeatures } from "@/components/sections/DetailedFeatures";
import { Plans } from "@/components/sections/Plans";
import { Testimonials } from "@/components/sections/Testimonials";
import { InteractiveFeatures } from "@/components/sections/InteractiveFeatures";
import { FAQ } from "@/components/sections/FAQ";
import { OrderNotification } from "@/components/notifications/OrderNotification";

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
  type: "yearly" | "lifetime" | "basic";
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  checkoutUrl: string;
  deviceLimit?: number;
};

const plans: Plan[] = [
  {
    type: "yearly",
    description: "Get our best value with the Annual Advanced plan! Protect unlimited devices with our premium security suite including VPN and identity protection.",
    price: "119.99",
    originalPrice: "479.88",
    discount: "75",
    checkoutUrl: "https://payment.link/yearly-plan"
  },
  {
    type: "lifetime",
    description: "Lock in our lowest monthly rate forever! Subscribe now to secure this special price that will never increase for the lifetime of your subscription.",
    price: "14.99",
    originalPrice: "39.99",
    discount: "62",
    checkoutUrl: "https://payment.link/monthly-plan"
  },
  {
    type: "basic",
    description: "Perfect for small households! Protect up to 5 devices with advanced security features including VPN and identity protection at an affordable price.",
    price: "89.99",
    originalPrice: "299.99",
    discount: "70",
    checkoutUrl: "https://payment.link/basic-plan",
    deviceLimit: 5
  }
];

const testimonials = [
  {
    name: "Sarah L.",
    quote: "As a mother of three, McAfee gives me peace of mind knowing all our devices are protected. The parental controls are fantastic!",
    image: "https://storage.googleapis.com/a1aa/image/qEVZhxzZ9Ik1kAlHcOQiQpSvSxvhWf_zwjK4Ce2PWN4.jpg",
  },
  {
    name: "John D.",
    quote: "Setup was seamless across all our family devices. The VPN feature is excellent for when we're traveling. Best security investment!",
    image: "https://storage.googleapis.com/a1aa/image/NDLKyBMUaptvrBieksu2fZCETEUWwEbLuF8mVSONlyY.jpg",
  },
  {
    name: "Emily K.",
    quote: "The identity protection features caught a potential fraud attempt on my account. McAfee's customer support was incredibly helpful!",
    image: "https://storage.googleapis.com/a1aa/image/Y-09LNkV_EDixOUG-iLukcduy3OAUzFrfz2LPH7UUHo.jpg",
  },
  {
    name: "Michael T.",
    quote: "We've been using McAfee for 2 years now. The real-time protection and regular updates keep our family's data safe and secure.",
    image: "https://storage.googleapis.com/a1aa/image/kwDjgktleWPB6n0BKHqcgj0MFTQ46cviOkdvg2uNRoI.jpg",
  },
];

const Index = () => {
  const [showPrivacyDialog, setShowPrivacyDialog] = useState(false);
  const [showCheckoutDialog, setShowCheckoutDialog] = useState(false);
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"yearly" | "lifetime" | "basic" | null>(null);
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

  const handleCheckout = (plan: "yearly" | "lifetime" | "basic") => {
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
            Protect your entire family with our comprehensive security suite. Choose from our Advanced
            plan at $119.99/year, Basic plan at $89.99/year, or monthly options starting at $14.99.
            Limited time offer - Save up to 75% on our annual plans!
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
      <DetailedFeatures />
      <Plans plans={plans} onCheckout={handleCheckout} />
      <InteractiveFeatures />
      <Testimonials testimonials={testimonials} />
      <FAQ />

      <OrderNotification />

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
