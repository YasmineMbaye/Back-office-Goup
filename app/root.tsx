import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import { ErrorBoundary as AppErrorBoundary } from "./components/ui/error-boundary";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <AppErrorBoundary>
          {children}
        </AppErrorBoundary>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Erreur";
  let details = "Une erreur inattendue s'est produite.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        message = "404";
        details = "La page demandée est introuvable.";
        break;
      case 403:
        message = "403";
        details = "Accès refusé à cette ressource.";
        break;
      case 500:
        message = "500";
        details = "Erreur interne du serveur.";
        break;
      default:
        message = `Erreur ${error.status}`;
        details = error.statusText || details;
    }
  } else if (error instanceof Error) {
    details = error.message;
    if (import.meta.env.DEV) {
      stack = error.stack;
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">{message}</h1>
        <p className="text-gray-600 text-lg mb-6">{details}</p>
        
        {stack && (
          <details className="mb-6 text-left">
            <summary className="cursor-pointer text-sm text-gray-500 mb-2">
              Détails de l'erreur (développement)
            </summary>
            <pre className="text-xs bg-gray-100 p-3 rounded overflow-auto max-h-40">
              {stack}
            </pre>
          </details>
        )}
        
        <div className="space-y-3">
          <a
            href={typeof window !== 'undefined' ? window.location.href : '/'}
            className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors inline-block text-center"
          >
            Réessayer
          </a>
          
          <a
            href="/"
            className="w-full text-gray-600 hover:text-gray-800 text-sm transition-colors inline-block text-center"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </main>
  );
}
