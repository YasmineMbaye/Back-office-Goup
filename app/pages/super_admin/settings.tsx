import { Form, useActionData, useLoaderData } from "react-router";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { requireSuperAdmin } from "../../server/auth/auth.server";
import { AVAILABLE_CURRENCIES, getCurrencies } from "../../server/data/currency.server";
import { Check, Globe, Settings as SettingsIcon } from "lucide-react";

export async function loader({ request }: LoaderFunctionArgs) {
  const { user } = await requireSuperAdmin({ request });
  
  const availableCurrencies = await getCurrencies();
  const currentCurrency = availableCurrencies[0]; // Default EUR
  
  return {
    user,
    currentCurrency,
    availableCurrencies
  };
}

export async function action({ request }: ActionFunctionArgs) {
  await requireSuperAdmin({ request });
  
  const formData = await request.formData();
  const currencyCode = formData.get("currency") as string;
  
  if (!currencyCode) {
    return { error: "Devise requise" };
  }
  
  const selectedCurrency = AVAILABLE_CURRENCIES.find(c => c.code === currencyCode);
  if (!selectedCurrency) {
    return { error: "Devise invalide" };
  }
  
  // En production, sauvegarder en base de données
  console.log("Currency updated to:", selectedCurrency);
  
  return { 
    success: `Devise mise à jour vers ${selectedCurrency.name} (${selectedCurrency.symbol})`,
    currency: selectedCurrency 
  };
}

export default function SuperAdminSettings() {
  const { user, currentCurrency, availableCurrencies } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <SettingsIcon className="w-10 h-10 text-gray-600" />
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Configuration Système</h1>
          <p className="text-lg text-gray-600 mt-1">Paramètres globaux de la plateforme</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Configuration des Devises */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-6 h-6 text-gray-600" />
            <h2 className="text-xl font-semibold text-gray-900">Devise Système</h2>
          </div>
          
          <p className="text-gray-600 text-base mb-6">
            Choisissez la devise principale pour l'affichage des montants sur la plateforme.
          </p>

          <Form method="post" className="space-y-4">
            <div className="space-y-3">
              {availableCurrencies.map((currency) => (
                <label 
                  key={currency.code}
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-gray-300 cursor-pointer transition-colors"
                >
                  <input
                    type="radio"
                    name="currency"
                    value={currency.code}
                    defaultChecked={currency.code === currentCurrency.code}
                    className="w-5 h-5 text-black border-gray-300 focus:ring-black"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900 text-base">
                        {currency.symbol} {currency.code}
                      </span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-600 text-base">{currency.name}</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Taux: 1 EUR = {currency.rate} {currency.code}
                    </div>
                  </div>
                  {currency.code === currentCurrency.code && (
                    <Check className="w-6 h-6 text-green-600" />
                  )}
                </label>
              ))}
            </div>

            {actionData?.error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-base">
                {actionData.error}
              </div>
            )}

            {actionData?.success && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-base">
                {actionData.success}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-base font-medium"
            >
              Mettre à jour la devise
            </button>
          </Form>
        </div>

        {/* Informations Système */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Informations Système</h2>
          
          <div className="space-y-5">
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-gray-600 text-base font-medium">Utilisateur connecté</span>
              <span className="font-semibold text-gray-900 text-base">{user.name}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-gray-600 text-base font-medium">Rôle</span>
              <span className="font-semibold text-gray-900 text-base">Super Administrateur</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-gray-600 text-base font-medium">Devise actuelle</span>
              <span className="font-semibold text-gray-900 text-base">
                {currentCurrency.symbol} {currentCurrency.name}
              </span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-gray-600 text-base font-medium">Devises disponibles</span>
              <span className="font-semibold text-gray-900 text-base">{availableCurrencies.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}