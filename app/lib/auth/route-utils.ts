import type { UserRole } from '../../types/navigation';

/**
 * Détermine le chemin de redirection selon le rôle de l'utilisateur
 */
export function getRedirectPath(role: UserRole): string {
  switch (role) {
    case "super_admin":
      return "/master";
    case "admin":
      return "/admin";
    case "partener":
      return "/partener";
    case "personnel":
      return "/personnel";
    default:
      return "/";
  }
}

/**
 * Vérifie si l'utilisateur accède à la bonne route selon son rôle
 */
export function isAuthorizedRoute(userRole: UserRole, currentPath: string): boolean {
  const allowedPaths = getAllowedPaths(userRole);
  return allowedPaths.some(path => currentPath.startsWith(path));
}

/**
 * Retourne les chemins autorisés pour un rôle donné
 */
function getAllowedPaths(role: UserRole): string[] {
  switch (role) {
    case "super_admin":
      return ["/master", "/admin", "/partener", "/personnel"]; // Accès à tout
    case "admin":
      return ["/admin"];
    case "partener":
      return ["/partener"];
    case "personnel":
      return ["/personnel"];
    default:
      return ["/"];
  }
}