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

export async function getCurrencies(): Promise<Currency[]> {
  return AVAILABLE_CURRENCIES;
}

export async function getCurrencyByCode(code: string): Promise<Currency | null> {
  const currency = AVAILABLE_CURRENCIES.find(c => c.code === code);
  return currency || null;
}

export function formatAmount(amount: number, currency: Currency): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: currency.code,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function convertAmount(amount: number, fromCurrency: Currency, toCurrency: Currency): number {
  // Convertir d'abord vers EUR, puis vers la devise cible
  const eurAmount = amount / fromCurrency.rate;
  return eurAmount * toCurrency.rate;
}