import { redirect, redirectDocument } from 'react-router';
import { getCurrencyByCode } from '../data/currency.server';
import type { Route } from '../../+types/root';

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


export const formdialog = async ({ request }: Route.ActionArgs) => {
  let formData = await request.formData();
  console.log("✅ Données reçues :", Object.fromEntries(formData.entries()));
   
  return redirectDocument("/master/regions")
// return redirect("master/regions");
};
 
export const formdialoguser = async ({ request }: Route.ActionArgs) => {
  let formData = await request.formData();
  console.log("✅ Données reçues :", Object.fromEntries(formData.entries()));
   
  return redirectDocument("/master/users")
// return redirect("master/regions");
};
export const formdialogpersonel = async ({ request }: Route.ActionArgs) => {
  let formData = await request.formData();
  console.log("✅ Données reçues :", Object.fromEntries(formData.entries()));
   
  return redirectDocument("/admin/personnel")
// return redirect("master/regions");
};

export const formdialogroledroit = async ({ request }: Route.ActionArgs) => {
  let formData = await request.formData();
  console.log("✅ Données reçues :", Object.fromEntries(formData.entries()));
   
  return redirectDocument("/admin/roles")
// return redirect("master/regions");
};

export const formdialogchauffeur = async ({ request }: Route.ActionArgs) => {
  let formData = await request.formData();
  console.log("✅ Données reçues :", Object.fromEntries(formData.entries()));
   
  return redirectDocument("/personnel/drivers")
// return redirect("master/regions");
};