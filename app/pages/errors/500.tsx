import { Link, useNavigate } from "react-router";
import { AlertTriangle, ArrowLeft, Home, RefreshCw } from "lucide-react";

export default function ServerErrorPage() {
  const navigate = useNavigate();

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Icône */}
        <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6">
          <AlertTriangle className="w-12 h-12 text-red-600" />
        </div>

        {/* Code d'erreur */}
        <h1 className="text-8xl font-bold text-gray-900 mb-4">500</h1>
        
        {/* Titre */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Erreur serveur
        </h2>
        
        {/* Description */}
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Une erreur interne s'est produite sur le serveur. 
          Nos équipes techniques ont été automatiquement notifiées et travaillent à résoudre le problème.
        </p>

        {/* Actions */}
        <div className="space-y-4">
          <button
            onClick={handleRefresh}
            className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-base font-medium"
          >
            <RefreshCw className="w-5 h-5" />
            Recharger la page
          </button>

          <button
            onClick={() => navigate(-1)}
            className="w-full bg-white text-gray-900 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-base font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour à la page précédente
          </button>
          
          <Link
            to="/"
            className="w-full bg-white text-gray-900 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-base font-medium"
          >
            <Home className="w-5 h-5" />
            Retour à l'accueil
          </Link>
        </div>

        {/* Support */}
        <div className="mt-8 p-4 bg-orange-50 border border-orange-200 rounded-lg">
          <h3 className="text-sm font-medium text-orange-800 mb-2">
            Le problème persiste ?
          </h3>
          <p className="text-sm text-orange-700">
            Contactez notre support technique avec le code d'erreur ci-dessous.
          </p>
        </div>

        {/* Information supplémentaire */}
        <div className="mt-4 p-4 bg-gray-100 border border-gray-200 rounded-lg">
          <p className="text-sm text-gray-700 mb-2">
            <strong>Code d'erreur :</strong> HTTP 500 Internal Server Error
          </p>
          <p className="text-xs text-gray-500">
            Référence : {new Date().toISOString().slice(0, 19)}
          </p>
        </div>
      </div>
    </div>
  );
}