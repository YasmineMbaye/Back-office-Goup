import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { isAuthorizedRoute } from '../../lib/auth/route-utils';
import type { UserRole } from '../../types/navigation';

interface RouteGuardProps {
  userRole: UserRole;
  children: React.ReactNode;
}

export function RouteGuard({ userRole, children }: RouteGuardProps) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Ne pas vérifier les routes d'erreur
    if (location.pathname.startsWith('/errors/')) {
      return;
    }

    if (!isAuthorizedRoute(userRole, location.pathname)) {
      // Rediriger vers la page 403 au lieu du dashboard
      navigate('/errors/403', { replace: true });
    }
  }, [userRole, location.pathname, navigate]);

  // Permettre l'accès aux pages d'erreur
  if (location.pathname.startsWith('/errors/')) {
    return <>{children}</>;
  }

  // Vérifier si l'utilisateur est autorisé à accéder à cette route
  if (!isAuthorizedRoute(userRole, location.pathname)) {
    return null; // Le useEffect va rediriger
  }

  return <>{children}</>;
}