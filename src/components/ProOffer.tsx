
import React, { useEffect, useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const ProOffer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has seen the offer
    const hasSeenOffer = localStorage.getItem('hasSeenProOffer');
    
    if (!hasSeenOffer) {
      // Show offer after 5 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('hasSeenProOffer', 'true');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsOpen(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleProOffer = () => {
    setIsOpen(false);
    toast({
      title: "Success!",
      description: "Your 30% discount has been applied.",
    });
  };

  if (!isOpen) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center animate-fade-in">
      <div className="bg-gradient-to-br from-[#1a1f2c] to-[#2d3748] text-white p-12 rounded-2xl max-w-2xl w-[90%] relative shadow-2xl border border-white/10 transform scale-100 transition-transform duration-300">
        <button
          onClick={handleClose}
          className="absolute right-6 top-6 text-white/60 hover:text-white text-2xl transition-colors"
        >
          ×
        </button>

        <div className="inline-block px-6 py-2 rounded-full font-bold bg-gradient-to-r from-orange-500 to-red-600 mb-6 shadow-lg">
          LIMITED TIME OFFER
        </div>

        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-200 to-white bg-clip-text text-transparent">
          Exclusive Pro Protection
        </h2>
        
        <p className="text-lg mb-6">
          Get our most comprehensive security package for your entire family
        </p>

        <div className="text-5xl font-bold my-6">
          <span className="text-2xl line-through text-white/50">$69.99</span>
          <span className="text-green-500 ml-4">$48.99</span>
        </div>

        <div className="space-y-4 text-left my-8">
          {[
            "Advanced Virus Protection",
            "Unlimited Device Coverage",
            "Real-time Threat Detection",
            "24/7 Premium Support",
            "Identity Theft Protection"
          ].map((feature, index) => (
            <div key={index} className="flex items-center text-white/90">
              <span className="text-green-500 mr-3">✓</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <button
          onClick={handleProOffer}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-4 rounded-full text-xl font-bold hover:transform hover:-translate-y-1 transition-all duration-200 hover:shadow-xl"
        >
          Claim Your 30% Discount
        </button>

        <div className="mt-6 text-sm text-white/70">
          Limited time offer - Expires in {minutes}:{seconds.toString().padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};

export default ProOffer;
