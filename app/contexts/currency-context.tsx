import { createContext, useContext } from 'react';
import { useFetcher } from 'react-router';
import type { Currency } from '../server/data/currency.server';
import { formatAmount as serverFormatAmount, convertAmount as serverConvertAmount } from '../server/data/currency.server';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatAmount: (amount: number) => string;
  convertAmount: (amount: number, fromCurrency?: Currency) => number;
  currencies: Currency[];
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

interface CurrencyProviderProps {
  children: React.ReactNode;
  currencies: Currency[];
  initialCurrency?: Currency;
}

export function CurrencyProvider({ children, currencies, initialCurrency }: CurrencyProviderProps) {
  const fetcher = useFetcher();
  const currency = initialCurrency || currencies[0];

  const setCurrency = (newCurrency: Currency) => {
    fetcher.submit(
      { currencyCode: newCurrency.code },
      { method: 'post', action: '/api/set-currency' }
    );
  };

  const formatAmount = (amount: number): string => {
    return serverFormatAmount(amount, currency);
  };

  const convertAmount = (amount: number, fromCurrency: Currency = currencies[0]): number => {
    return serverConvertAmount(amount, fromCurrency, currency);
  };

  return (
    <CurrencyContext.Provider value={{
      currency,
      setCurrency,
      formatAmount,
      convertAmount,
      currencies
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