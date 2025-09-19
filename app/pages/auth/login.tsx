import { Form, redirect, useActionData, useLoaderData } from "react-router";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { getUserFromSession, createUserSession } from "../../server/auth/session.server";
import { getRedirectPath } from "../../server/auth/redirect.server";

// Simuler une base de données d'utilisateurs
const USERS_DB = {
  "superadmin@example.com": {
    id: "super-admin-1",
    name: "Super Admin",
    email: "superadmin@example.com",
    password: "password123", // Mot de passe en clair pour les tests
    role: "super_admin" as const,
    permissions: ["*"]
  },
  "admin@example.com": {
    id: "admin-1",
    name: "Admin Région",
    email: "admin@example.com",
    password: "password123",
    role: "admin" as const,
    region_id: "france",
    permissions: ["manage_personnel", "manage_drivers", "manage_billing"]
  },
  "partner@example.com": {
    id: "partner-1",
    name: "Partenaire Gouvernement",
    email: "partner@example.com",
    password: "password123",
    role: "partener" as const,
    region_id: "france",
    permissions: ["audit", "compliance", "reports"]
  },
  "personnel@example.com": {
    id: "personnel-1",
    name: "Personnel Support",
    email: "personnel@example.com",
    password: "password123",
    role: "personnel" as const,
    region_id: "france",
    permissions: ["view_drivers", "manage_support", "view_trips"]
  }
};

export async function loader({ request }: LoaderFunctionArgs) {
  // Vérifier si l'utilisateur est déjà connecté
  const user = await getUserFromSession(request);
  if (user) {
    // Rediriger selon le rôle
    const redirectPath = getRedirectPath(user.role);
    throw redirect(redirectPath);
  }
  
  return { message: null };
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const redirectTo = (formData.get("redirectTo") as string) || "/";

  if (!email || !password) {
    return { error: "Email et mot de passe requis" };
  }

  // Vérifier les identifiants
  const user = USERS_DB[email as keyof typeof USERS_DB];
  if (!user) {
    return { error: "Identifiants invalides" };
  }

  // Pour les comptes de test, vérification simple du mot de passe
  if (password !== user.password) {
    return { error: "Identifiants invalides" };
  }

  // Déterminer la redirection selon le rôle
  const finalRedirectTo = redirectTo === "/" ? getRedirectPath(user.role) : redirectTo;

  // Créer la session
  return createUserSession(user, finalRedirectTo);
}


export default function Login() {
  const { message } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="/app/assets/images/logo_dark_mode.png"
            alt="Logo"
          />
          <h2 className="mt-6 text-center text-4xl font-bold text-black">
            Connexion au Back-Office
          </h2>
        </div>
        
        <Form method="post" className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-base font-medium text-black mb-3">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-4 py-4 bg-white border border-gray-300 text-black text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder-gray-500"
                placeholder="Adresse email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-base font-medium text-black mb-3">
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-4 py-4 bg-white border border-gray-300 text-black text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder-gray-500"
                placeholder="Mot de passe"
              />
            </div>
          </div>

          {actionData?.error && (
            <div className="bg-red-50 border border-red-300 text-red-800 px-4 py-3 rounded-lg text-base text-center">
              {actionData.error}
            </div>
          )}

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-4 px-6 text-base font-semibold rounded-lg text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors"
            >
              Se connecter
            </button>
          </div>
        </Form>

        <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <p className="font-semibold text-black text-base mb-4">Comptes de test :</p>
          <ul className="space-y-3 text-sm">
            <li className="text-gray-600"><span className="text-black font-semibold">Super Admin:</span> superadmin@example.com</li>
            <li className="text-gray-600"><span className="text-black font-semibold">Admin Région:</span> admin@example.com</li>
            <li className="text-gray-600"><span className="text-black font-semibold">Partenaire:</span> partner@example.com</li>
            <li className="text-gray-600"><span className="text-black font-semibold">Personnel:</span> personnel@example.com</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Mot de passe : <code className="bg-gray-200 px-2 py-1 rounded text-black font-mono text-sm">password123</code></p>
        </div>
      </div>
    </div>
  );
}