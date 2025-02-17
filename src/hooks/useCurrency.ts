
import { useTranslation } from 'react-i18next';
import { currencyMap } from '../i18n';

export const useCurrency = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language.split('-')[0];
  const { symbol, rate } = currencyMap[currentLang] || currencyMap.default;

  const formatPrice = (priceUSD: string) => {
    const numericPrice = parseFloat(priceUSD);
    const convertedPrice = (numericPrice * rate).toFixed(2);
    return `${symbol}${convertedPrice}`;
  };

  return { formatPrice, symbol, rate };
};
