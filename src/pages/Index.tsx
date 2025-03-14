
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
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
import { OrderConfirmationDialog } from "@/components/dialogs/OrderConfirmationDialog";

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
  type: "yearly" | "basic";
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
    price: "89.99",
    originalPrice: "375",
    discount: "76",
    checkoutUrl: "https://whop.com/checkout/plan_5Xw4609QlND3y?d2c=true"
  },
  {
    type: "basic",
    description: "Perfect for small households! Protect up to 5 devices with advanced security features including VPN and identity protection at an affordable price.",
    price: "49.99",
    originalPrice: "250",
    discount: "80",
    checkoutUrl: "https://whop.com/checkout/plan_DnnCUJAKGPBGA?d2c=true",
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
  {
    name: "David R.",
    quote: "The password manager and secure browsing features have made my online experience much safer. Great value for money!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80",
  },
  {
    name: "Lisa M.",
    quote: "After experiencing a security breach with another provider, switching to McAfee was the best decision. Haven't had any issues since!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=800&q=80",
  },
  {
    name: "Robert H.",
    quote: "The cross-platform protection is fantastic. All our family's devices are secured with one subscription. Highly recommend!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=800&q=80",
  },
  {
    name: "Jennifer P.",
    quote: "The mobile protection features are outstanding. Feel much safer doing online banking and shopping on my phone now.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=800&q=80",
  }
];

const Index = () => {
  const { t } = useTranslation();
  const [showPrivacyDialog, setShowPrivacyDialog] = useState(false);
  const [showCheckoutDialog, setShowCheckoutDialog] = useState(false);
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(false);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"yearly" | "basic" | null>(null);
  const [selectedPlanForOrder, setSelectedPlanForOrder] = useState<"yearly" | "basic" | null>(null);
  const [selectedPlanUrl, setSelectedPlanUrl] = useState<string>("");
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

  const handleCheckout = (plan: "yearly" | "basic") => {
    const selectedPlanData = plans.find(p => p.type === plan);
    setSelectedPlanForOrder(plan);
    setSelectedPlanUrl(selectedPlanData?.checkoutUrl || "");
    setShowOrderConfirmation(true);
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
        <h1 className="text-3xl font-bold">{t('header.title')}</h1>
      </header>

      <section className="relative text-white text-center py-24" 
               style={{ background: "linear-gradient(rgba(220,38,38,0.9), rgba(220,38,38,0.9))" }}>
        <img
          src="https://storage.googleapis.com/a1aa/image/UXVuaGo-lzbFqZ5Pw59k9tybwwNSwqWYsdJHOj-rae0.jpg"
          alt="Background image showing a family using various devices"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">{t('header.subtitle')}</h2>
          <p className="text-xl mb-8">{t('hero.description')}</p>
          <button
            onClick={scrollToPricing}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-colors transform hover:scale-105 duration-200"
          >
            {t('hero.cta')}
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

      <OrderConfirmationDialog
        open={showOrderConfirmation}
        onOpenChange={setShowOrderConfirmation}
        planType={selectedPlanForOrder}
        checkoutUrl={selectedPlanUrl}
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
