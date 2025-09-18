import { redirect } from 'react-router';

export interface AppError extends Error {
  status?: number;
  code?: string;
  details?: any;
}

export function createError(
  message: string, 
  status: number = 500, 
  code?: string, 
  details?: any
): AppError {
  const error = new Error(message) as AppError;
  error.status = status;
  error.code = code;
  error.details = details;
  return error;
}

export function handleError(error: unknown): Response {
  console.error('Application Error:', error);

  if (error instanceof Response) {
    return error;
  }

  if (error instanceof Error) {
    const appError = error as AppError;
    const status = appError.status || 500;

    switch (status) {
      case 401:
        return redirect('/login');
      case 403:
        return redirect('/errors/403');
      case 404:
        return redirect('/errors/404');
      case 500:
      default:
        return redirect('/errors/500');
    }
  }

  // Erreur inconnue
  return redirect('/errors/500');
}

export function createAuthError(message: string = "Non autorisé"): Response {
  return new Response(null, {
    status: 403,
    headers: { Location: "/errors/403" },
  });
}

export function createNotFoundError(message: string = "Ressource introuvable"): Response {
  return new Response(null, {
    status: 404,
    headers: { Location: "/errors/404" },
  });
}

export function createServerError(message: string = "Erreur serveur"): Response {
  return new Response(null, {
    status: 500,
    headers: { Location: "/errors/500" },
  });
}

export function logError(error: unknown, context?: string) {
  const timestamp = new Date().toISOString();
  const errorInfo = {
    timestamp,
    context,
    error: error instanceof Error ? {
      message: error.message,
      stack: error.stack,
      name: error.name
    } : error
  };

  console.error('Error Log:', JSON.stringify(errorInfo, null, 2));
  
  // En production, envoyer vers un service de logging
  // sendToLoggingService(errorInfo);
}