
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface CheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedPlan: "yearly" | "lifetime" | null;
  onPurchase: () => void;
}

export const CheckoutDialog = ({ open, onOpenChange, selectedPlan, onPurchase }: CheckoutDialogProps) => {
  const isMonthlyPlan = selectedPlan === "lifetime"; // Using "lifetime" type for monthly plan
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Complete Your Order</DialogTitle>
          <DialogDescription className="text-gray-600">
            You're just one step away from protecting your family
          </DialogDescription>
          <button
            onClick={() => onOpenChange(false)}
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
                    {isMonthlyPlan ? "Monthly Subscription" : "1 Year Subscription"}
                  </div>
                  {!isMonthlyPlan && (
                    <div className="text-green-600 text-sm font-semibold mt-1">
                      30% Welcome Discount Applied!
                    </div>
                  )}
                </td>
                <td className="text-right p-4">
                  {!isMonthlyPlan ? (
                    <div>
                      <span className="line-through text-gray-500">$99.99</span>
                      <div className="text-green-600 font-bold">$69.99</div>
                    </div>
                  ) : (
                    <div className="font-bold">$9.99</div>
                  )}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="border-t">
                <th className="text-left p-4">Total</th>
                <td className="text-right p-4 font-bold text-lg">
                  ${isMonthlyPlan ? "9.99" : "69.99"}
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
              onClick={onPurchase}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 duration-200"
            >
              Complete Purchase
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
