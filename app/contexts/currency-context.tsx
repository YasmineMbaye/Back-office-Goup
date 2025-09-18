import { createContext, useContext, useState } from 'react';

export interface Currency {
  code: string;
  symbol: string;
  name: string;
  rate: number; // Taux par rapport à l'EUR
}

export const AVAILABLE_CURRENCIES: Currency[] = [
  { code: 'EUR', symbol: '€', name: 'Euro', rate: 1 },
  { code: 'USD', symbol: '$', name: 'Dollar US', rate: 1.08 },
  { code: 'GBP', symbol: '£', name: 'Livre Sterling', rate: 0.86 },
  { code: 'JPY', symbol: '¥', name: 'Yen Japonais', rate: 161.50 },
  { code: 'CAD', symbol: 'C$', name: 'Dollar Canadien', rate: 1.48 },
  { code: 'AUD', symbol: 'A$', name: 'Dollar Australien', rate: 1.64 },
  { code: 'CHF', symbol: 'CHF', name: 'Franc Suisse', rate: 0.94 },
  { code: 'CNY', symbol: '¥', name: 'Yuan Chinois', rate: 7.83 }
];

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatAmount: (amount: number) => string;
  convertAmount: (amount: number, fromCurrency?: Currency) => number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

interface CurrencyProviderProps {
  children: React.ReactNode;
  initialCurrency?: Currency;
}

export function CurrencyProvider({ children, initialCurrency = AVAILABLE_CURRENCIES[0] }: CurrencyProviderProps) {
  const [currency, setCurrency] = useState<Currency>(initialCurrency);

  const formatAmount = (amount: number): string => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: currency.code,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const convertAmount = (amount: number, fromCurrency: Currency = AVAILABLE_CURRENCIES[0]): number => {
    // Convertir d'abord vers EUR, puis vers la devise cible
    const eurAmount = amount / fromCurrency.rate;
    return eurAmount * currency.rate;
  };

  return (
    <CurrencyContext.Provider value={{
      currency,
      setCurrency,
      formatAmount,
      convertAmount
    }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}