
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Shield, X, CheckCircle, Clock, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

interface OrderConfirmationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  planType: "yearly" | "lifetime" | "basic" | null;
  checkoutUrl?: string;
}

export const OrderConfirmationDialog = ({ 
  open, 
  onOpenChange, 
  planType,
  checkoutUrl 
}: OrderConfirmationDialogProps) => {
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds

  useEffect(() => {
    if (!open) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [open]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const getPlanDetails = () => {
    switch (planType) {
      case "yearly":
        return {
          name: "Annual Advanced Protection",
          originalPrice: "€479.88",
          price: "€119.99",
          savings: "€359.89",
          discount: "75%"
        };
      case "lifetime":
        return {
          name: "Monthly Protection",
          originalPrice: "€39.99",
          price: "€14.99",
          savings: "€25.00",
          discount: "62%"
        };
      case "basic":
        return {
          name: "Basic Annual Protection",
          originalPrice: "€299.99",
          price: "€89.99",
          savings: "€210.00",
          discount: "70%"
        };
      default:
        return null;
    }
  };

  const planDetails = getPlanDetails();
  if (!planDetails) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center justify-center gap-2">
            <Shield className="w-8 h-8 text-red-600" />
            <DialogTitle className="text-2xl font-bold text-center">
              Complete Your Order
            </DialogTitle>
          </div>
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100"
          >
            <X className="h-4 w-4" />
          </button>
        </DialogHeader>

        <div className="mt-6">
          <div className="bg-red-50 p-4 rounded-lg mb-6 flex items-center gap-3">
            <Clock className="w-5 h-5 text-red-600" />
            <span className="text-red-600 font-semibold">
              Offer expires in: {minutes}:{seconds.toString().padStart(2, '0')}
            </span>
          </div>

          <div className="bg-white rounded-lg p-6 mb-6 border-2 border-red-100">
            <h3 className="text-xl font-bold mb-4">{planDetails.name}</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Regular Price:</span>
                <span className="line-through text-gray-500">{planDetails.originalPrice}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Your Price:</span>
                <span className="text-2xl font-bold text-red-600">{planDetails.price}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">You Save:</span>
                <span className="text-green-600 font-bold">{planDetails.savings} ({planDetails.discount})</span>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Advanced virus and malware protection with real-time scanning</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Secure VPN for safe browsing and online transactions</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Identity theft protection with real-time monitoring</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Premium 24/7 technical support</span>
              </div>
            </div>

            <a 
              href={checkoutUrl}
              className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg text-center transition-all transform hover:scale-105 duration-200 flex items-center justify-center gap-2"
            >
              Get Protected Now <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center">
            <p className="font-bold text-gray-700 mb-2">
              Secure payment powered by industry leaders • 30-day money-back guarantee • 24/7 support
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <img src="https://storage.googleapis.com/a1aa/image/visa.png" alt="Visa" className="h-8 opacity-75" />
              <img src="https://storage.googleapis.com/a1aa/image/mastercard.png" alt="Mastercard" className="h-8 opacity-75" />
              <img src="https://storage.googleapis.com/a1aa/image/amex.png" alt="American Express" className="h-8 opacity-75" />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
