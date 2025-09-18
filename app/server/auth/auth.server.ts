import type { LoaderFunctionArgs } from "react-router";
import { getUserFromSession, requireUserId } from "./session.server";
import type { UserRole } from "../types/navigation";

/**
 * Loader pour protéger les routes et vérifier les rôles
 */
export async function requireAuth(
  request: Request,
  allowedRoles?: UserRole[]
): Promise<{ user: any; isAuthorized: boolean }> {
  // Vérifier que l'utilisateur est connecté
  await requireUserId(request, "/login");
  
  const user = await getUserFromSession(request);
  if (!user) {
    throw new Response(null, {
      status: 302,
      headers: { Location: "/login" },
    });
  }

  // Vérifier les rôles si spécifiés
  let isAuthorized = true;
  if (allowedRoles && allowedRoles.length > 0) {
    isAuthorized = allowedRoles.includes(user.role);
  }

  if (!isAuthorized) {
    throw new Response(null, {
      status: 403,
      headers: { Location: "/errors/403" },
    });
  }

  return { user, isAuthorized };
}

/**
 * Loader spécialisé pour les super admins
 */
export async function requireSuperAdmin({ request }: LoaderFunctionArgs) {
  return requireAuth(request, ["super_admin"]);
}

/**
 * Loader spécialisé pour les admins (inclut super admin)
 */
export async function requireAdmin({ request }: LoaderFunctionArgs) {
  return requireAuth(request, ["super_admin", "admin"]);
}

/**
 * Loader spécialisé pour les partenaires
 */
export async function requirePartner({ request }: LoaderFunctionArgs) {
  return requireAuth(request, ["partener"]);
}

/**
 * Loader spécialisé pour le personnel
 */
export async function requirePersonnel({ request }: LoaderFunctionArgs) {
  return requireAuth(request, ["personnel"]);
}

/**
 * Loader générique pour tous les utilisateurs authentifiés
 */
export async function requireUser({ request }: LoaderFunctionArgs) {
  return requireAuth(request);
}