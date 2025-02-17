import { useState, useEffect } from "react";
import { Check } from "lucide-react";

const US_CITIES = [
  "New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX", 
  "Phoenix, AZ", "Philadelphia, PA", "San Antonio, TX", "San Diego, CA",
  "Dallas, TX", "San Jose, CA", "Austin, TX", "Denver, CO", "Boston, MA"
];

const FIRST_NAMES = [
  "James", "Emma", "Liam", "Olivia", "Noah", "Ava", "William", "Sophia",
  "Mason", "Isabella", "Ethan", "Mia", "Michael", "Charlotte", "Alexander",
  "Sarah", "Daniel", "Emily", "Matthew", "Elizabeth"
];

interface OrderNotification {
  name: string;
  location: string;
  plan: "yearly" | "lifetime" | "basic";
  timestamp: Date;
}

export const OrderNotification = () => {
  const [notification, setNotification] = useState<OrderNotification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const generateFakeOrder = () => {
    const firstName = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
    const location = US_CITIES[Math.floor(Math.random() * US_CITIES.length)];
    const plans: Array<"yearly" | "lifetime" | "basic"> = ["yearly", "lifetime", "basic"];
    const plan = plans[Math.floor(Math.random() * plans.length)];

    return {
      name: firstName,
      location,
      plan,
      timestamp: new Date()
    };
  };

  useEffect(() => {
    // Generate initial order
    setNotification(generateFakeOrder());

    // Set up interval for new orders
    const orderInterval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setNotification(generateFakeOrder());
        setIsVisible(true);
      }, 500); // Wait for fade out before changing
    }, 7000);

    // Show initial notification
    setTimeout(() => setIsVisible(true), 1000);

    return () => clearInterval(orderInterval);
  }, []);

  if (!notification) return null;

  const getPlanName = (plan: "yearly" | "lifetime" | "basic") => {
    switch (plan) {
      case "yearly":
        return "Annual Advanced Protection Plan";
      case "lifetime":
        return "Lifetime Price-Lock Plan";
      case "basic":
        return "Annual Basic Protection Plan";
    }
  };

  const getNotificationStyle = (plan: "yearly" | "lifetime" | "basic") => {
    switch (plan) {
      case "yearly":
        return "from-blue-500 to-blue-600";
      case "lifetime":
        return "from-emerald-500 to-emerald-600";
      case "basic":
        return "from-purple-500 to-purple-600";
    }
  };

  return (
    <div
      className={`fixed bottom-4 left-4 transform transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className={`rounded-lg shadow-lg p-4 bg-gradient-to-r ${getNotificationStyle(notification.plan)} text-white max-w-md`}>
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Check className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <p className="font-medium">
              {notification.name} from {notification.location}
            </p>
            <p className="text-sm text-white/90">
              just subscribed to {getPlanName(notification.plan)}
            </p>
            <p className="text-xs text-white/80 mt-1">
              {new Date().getMinutes() - notification.timestamp.getMinutes()} minutes ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
