import { redirect } from 'react-router';
import { getCurrencyByCode } from '../data/currency.server';

export async function setCurrencyAction({ request }: { request: Request }) {
  const formData = await request.formData();
  const currencyCode = formData.get('currencyCode') as string;
  
  if (!currencyCode) {
    throw new Error('Currency code is required');
  }

  const currency = await getCurrencyByCode(currencyCode);
  if (!currency) {
    throw new Error('Invalid currency code');
  }

  // Ici vous pourriez sauvegarder la préférence de devise dans une session ou une base de données
  // Pour cet exemple, on redirige simplement vers la page précédente
  const referer = request.headers.get('referer') || '/';
  return redirect(referer);
}