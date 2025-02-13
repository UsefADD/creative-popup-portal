
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Shield, X, CheckCircle, AlertCircle, Lock } from "lucide-react";

interface WelcomeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onScrollToPricing: () => void;
}

export const WelcomeDialog = ({ open, onOpenChange, onScrollToPricing }: WelcomeDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Shield className="w-8 h-8 text-red-600" />
            <DialogTitle className="text-2xl font-bold text-center">
              Welcome to McAfee Family Protection!
            </DialogTitle>
          </div>
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </DialogHeader>
        <div className="mt-4 text-center">
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg mb-4 shadow-sm">
            <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-red-600 mb-4">Special First-Time Visitor Offer!</h3>
            <p className="text-gray-700 mb-6">
              Welcome! As a special offer for new visitors, we're offering our premium family protection package at an incredible discount.
            </p>
            <div className="space-y-4 text-left mb-6">
              {[
                "Complete protection for unlimited devices",
                "Advanced virus & malware protection",
                "24/7 premium customer support"
              ].map((feature, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="bg-white p-4 rounded-lg mb-6 shadow-sm">
              <div className="text-2xl font-bold text-red-600">
                <div className="mb-2">Annual Plan Special Offer:</div>
                <span className="line-through text-gray-500">$99.99</span>
                <span className="ml-2">$69.99/year</span>
              </div>
            </div>
            <button
              onClick={onScrollToPricing}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 duration-200 shadow-lg flex items-center justify-center mx-auto gap-2"
            >
              <CheckCircle className="w-5 h-5" />
              Get Protected Now
            </button>
          </div>
          <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
            <Lock className="w-4 h-4" />
            <span>Limited time offer for new customers. Discount applies to first year only.</span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
