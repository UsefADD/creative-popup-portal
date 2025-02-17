
import { useTranslation } from 'react-i18next';
import { useCurrency } from '@/hooks/useCurrency';

interface Plan {
  type: "yearly" | "lifetime" | "basic";
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  checkoutUrl: string;
  deviceLimit?: number;
}

interface PlansProps {
  plans: Plan[];
  onCheckout: (plan: "yearly" | "lifetime" | "basic") => void;
}

export const Plans = ({ plans, onCheckout }: PlansProps) => {
  const { t } = useTranslation();
  const { formatPrice } = useCurrency();