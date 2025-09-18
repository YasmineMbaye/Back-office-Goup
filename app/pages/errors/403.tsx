import { Link, useNavigate } from "react-router";
import { Shield, ArrowLeft, Home } from "lucide-react";

export default function ForbiddenPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Icône */}
        <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6">
          <Shield className="w-12 h-12 text-red-600" />
        </div>

        {/* Code d'erreur */}
        <h1 className="text-8xl font-bold text-gray-900 mb-4">403</h1>
        
        {/* Titre */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Accès refusé
        </h2>
        
        {/* Description */}
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Vous n'avez pas les permissions nécessaires pour accéder à cette page. 
          Contactez votre administrateur si vous pensez qu'il s'agit d'une erreur.
        </p>

        {/* Actions */}
        <div className="space-y-4">
          <button
            onClick={() => navigate(-1)}
            className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-base font-medium"
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

        {/* Information supplémentaire */}
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Code d'erreur :</strong> HTTP 403 Forbidden
          </p>
        </div>
      </div>
    </div>
  );
}