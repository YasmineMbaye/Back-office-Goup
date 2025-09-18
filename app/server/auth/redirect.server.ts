import { redirect } from 'react-router';
import type { UserRole } from '../../types/navigation';
import { getRedirectPath, isAuthorizedRoute } from '../../lib/auth/route-utils';

/**
 * Redirige l'utilisateur vers son dashboard selon son rôle
 */
export function redirectToUserDashboard(role: UserRole) {
  const path = getRedirectPath(role);
  return redirect(path);
}

// Ré-exporter les fonctions utilitaires pour compatibilité
export { getRedirectPath, isAuthorizedRoute };