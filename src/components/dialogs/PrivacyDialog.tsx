
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Shield, X, Lock } from "lucide-react";
import { PrivacyContent } from "../privacy/PrivacyContent";

interface PrivacyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PrivacyDialog = ({ open, onOpenChange }: PrivacyDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-6 h-6 text-red-600" />
            <DialogTitle className="text-2xl font-bold">Privacy Policy</DialogTitle>
          </div>
          <DialogDescription className="text-gray-600">
            Last updated: March 2024
          </DialogDescription>
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </DialogHeader>
        <div className="mt-4 space-y-4 text-gray-700">
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-blue-800">Your Privacy Matters</h3>
            </div>
            <p className="text-blue-900">
              We are committed to protecting your personal information and ensuring your online safety.
            </p>
          </div>
          <PrivacyContent />
        </div>
      </DialogContent>
    </Dialog>
  );
};
