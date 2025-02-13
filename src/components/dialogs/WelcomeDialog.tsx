
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Shield, X, CheckCircle, AlertCircle, Lock, Percent } from "lucide-react";

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
              Special Welcome Offer!
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
            <div className="relative inline-block mb-4">
              <div className="absolute -right-3 -top-3">
                <div className="bg-red-600 text-white rounded-full p-2 animate-bounce">
                  <Percent className="w-5 h-5" />
                </div>
              </div>
              <AlertCircle className="w-12 h-12 text-red-600 mx-auto" />
            </div>
            <h3 className="text-3xl font-bold text-red-600 mb-4">
              Monthly Protection Plan
            </h3>
            <div className="bg-white p-4 rounded-lg mb-6">
              <p className="text-gray-700 text-lg mb-4">
                Subscribe monthly and get our complete security package:
              </p>
              <div className="space-y-3 text-left mb-4">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Premium protection for unlimited devices</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Advanced virus & malware protection</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>24/7 premium customer support</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">
                  <span className="text-2xl">Only $9.99/month</span>
                </div>
                <p className="text-sm text-green-600 mt-1">Flexible monthly billing - Cancel anytime!</p>
              </div>
            </div>
            <button
              onClick={onScrollToPricing}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 duration-200 shadow-lg flex items-center justify-center mx-auto gap-2"
            >
              <CheckCircle className="w-5 h-5" />
              Start Your Protection Now
            </button>
          </div>
          <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
            <Lock className="w-4 h-4" />
            <span>No long-term commitment required. Cancel your subscription anytime.</span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
