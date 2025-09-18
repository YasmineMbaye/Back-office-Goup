import { Component, type ReactNode } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: any;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Log l'erreur avec contexte côté client
    this.logError(error, errorInfo);
    
    this.setState({ errorInfo });
  }

  logError = (error: Error, errorInfo: any) => {
    const errorLog = {
      timestamp: new Date().toISOString(),
      error: {
        message: error.message,
        stack: error.stack,
        name: error.name
      },
      errorInfo: {
        componentStack: errorInfo.componentStack
      },
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
      url: typeof window !== 'undefined' ? window.location.href : 'unknown'
    };

    console.error('Application Error:', errorLog);
    
    // En production, envoyer vers un service de monitoring
    // sendToErrorTracking(errorLog);
  };

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const isDevelopment = process.env.NODE_ENV === 'development';

      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
          <div className="max-w-2xl w-full bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Une erreur inattendue s'est produite
            </h1>
            
            <p className="text-gray-600 text-lg mb-8">
              Nous nous excusons pour ce désagrément. L'erreur a été automatiquement signalée à notre équipe technique.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={this.handleRetry}
                className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-base font-medium"
              >
                <RefreshCw className="w-5 h-5" />
                Réessayer
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="bg-white text-gray-900 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-base font-medium"
              >
                <Home className="w-5 h-5" />
                Retour à l'accueil
              </button>
            </div>

            {isDevelopment && this.state.error && (
              <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
                <details className="cursor-pointer">
                  <summary className="font-semibold text-red-800 mb-2">
                    Détails de l'erreur (mode développement)
                  </summary>
                  <div className="text-sm text-red-700 space-y-2">
                    <div>
                      <strong>Message :</strong> {this.state.error.message}
                    </div>
                    {this.state.error.stack && (
                      <div>
                        <strong>Stack trace :</strong>
                        <pre className="mt-1 text-xs bg-red-100 p-2 rounded overflow-auto max-h-40">
                          {this.state.error.stack}
                        </pre>
                      </div>
                    )}
                    {this.state.errorInfo?.componentStack && (
                      <div>
                        <strong>Component stack :</strong>
                        <pre className="mt-1 text-xs bg-red-100 p-2 rounded overflow-auto max-h-40">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </div>
                    )}
                  </div>
                </details>
              </div>
            )}

            <div className="mt-6 p-4 bg-gray-100 border border-gray-200 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Référence d'erreur :</strong> {new Date().toISOString().slice(0, 19)}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Communiquez cette référence au support en cas de besoin
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}