import { Link, useNavigate } from "react-router";
import { FileQuestion, ArrowLeft, Home, Search } from "lucide-react";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Icône */}
        <div className="mx-auto w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6">
          <FileQuestion className="w-12 h-12 text-blue-600" />
        </div>

        {/* Code d'erreur */}
        <h1 className="text-8xl font-bold text-gray-900 mb-4">404</h1>
        
        {/* Titre */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Page introuvable
        </h2>
        
        {/* Description */}
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          La page que vous recherchez n'existe pas ou a été déplacée. 
          Vérifiez l'URL ou utilisez les liens ci-dessous pour naviguer.
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

        {/* Suggestions */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Search className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Suggestions :</span>
          </div>
          <ul className="text-sm text-blue-700 text-left space-y-1">
            <li>• Vérifiez l'orthographe de l'URL</li>
            <li>• Utilisez le menu de navigation</li>
            <li>• Contactez le support technique</li>
          </ul>
        </div>

        {/* Information supplémentaire */}
        <div className="mt-4 p-4 bg-gray-100 border border-gray-200 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Code d'erreur :</strong> HTTP 404 Not Found
          </p>
        </div>
      </div>
    </div>
  );
}