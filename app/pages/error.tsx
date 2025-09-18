import { useRouteError, isRouteErrorResponse, Link } from "react-router";
import { AlertTriangle, Home, ArrowLeft } from "lucide-react";

export default function ErrorPage() {
  const error = useRouteError();

  let errorMessage = "Une erreur inattendue s'est produite";
  let errorStatus = 500;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    
    switch (error.status) {
      case 404:
        errorMessage = "Page non trouvée";
        break;
      case 401:
        errorMessage = "Accès non autorisé";
        break;
      case 403:
        errorMessage = "Accès interdit";
        break;
      case 500:
        errorMessage = "Erreur interne du serveur";
        break;
      default:
        errorMessage = error.statusText || errorMessage;
    }
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="max-w-lg w-full text-center">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/app/assets/images/logo_light_mode.png" 
            alt="Logo" 
            className="w-16 h-16 mx-auto filter brightness-0 invert"
          />
        </div>

        {/* Error Icon */}
        <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-white" />
        </div>
        
        {/* Error Status */}
        <div className="mb-4">
          <h1 className="text-6xl font-bold text-white mb-2">
            {errorStatus}
          </h1>
          <h2 className="text-xl font-semibold text-gray-300">
            {errorMessage}
          </h2>
        </div>
        
        {/* Error Description */}
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          {errorStatus === 404 && "La page que vous cherchez n'existe pas ou a été déplacée."}
          {errorStatus === 401 && "Vous devez vous connecter pour accéder à cette page."}
          {errorStatus === 403 && "Vous n'avez pas les permissions nécessaires pour accéder à cette ressource."}
          {errorStatus === 500 && "Un problème technique est survenu sur nos serveurs. Veuillez réessayer plus tard."}
          {![404, 401, 403, 500].includes(errorStatus) && "Une erreur technique s'est produite. Notre équipe a été notifiée."}
        </p>

        {/* Actions */}
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            <Home className="w-4 h-4" />
            Retour à l'accueil
          </Link>
          
          <div>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white px-4 py-2 text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à la page précédente
            </button>
          </div>
        </div>

        {/* Development Error Details */}
        {process.env.NODE_ENV === 'development' && error instanceof Error && (
          <details className="mt-8 text-left bg-gray-900 rounded-lg p-4 max-w-2xl mx-auto">
            <summary className="cursor-pointer text-gray-300 mb-3">
              Détails de l'erreur (développement)
            </summary>
            <pre className="text-xs text-gray-400 overflow-auto">
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}