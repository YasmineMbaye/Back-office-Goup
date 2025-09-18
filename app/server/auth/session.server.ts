import { createCookieSessionStorage } from "react-router";
import type { User } from "../types/navigation";

// Configuration de session
const SESSION_SECRET = process.env.SESSION_SECRET || "super-secret-session-key-change-in-production";

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7, // 7 jours
    path: "/",
    sameSite: "lax",
    secrets: [SESSION_SECRET],
    secure: process.env.NODE_ENV === "production",
  },
});

export async function createUserSession(user: User, redirectTo: string) {
  const session = await sessionStorage.getSession();
  session.set("userId", user.id);
  session.set("userRole", user.role);
  session.set("userRegion", user.region_id);
  
  return new Response(null, {
    status: 302,
    headers: {
      Location: redirectTo,
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
}

export async function getUserSession(request: Request) {
  const cookie = request.headers.get("Cookie");
  const session = await sessionStorage.getSession(cookie);
  return session;
}

export async function getUserId(request: Request): Promise<string | null> {
  const session = await getUserSession(request);
  return session.get("userId") || null;
}

export async function requireUserId(request: Request, redirectTo: string = "/login") {
  const userId = await getUserId(request);
  if (!userId) {
    throw new Response(null, {
      status: 302,
      headers: { Location: redirectTo },
    });
  }
  return userId;
}

export async function getUserFromSession(request: Request): Promise<User | null> {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  const userRole = session.get("userRole");
  const userRegion = session.get("userRegion");
  
  if (!userId || !userRole) return null;
  
  // Simuler la récupération de l'utilisateur depuis la base de données
  // En production, vous feriez un appel à votre base de données
  return await getUserById(userId, userRole, userRegion);
}

export async function logout(request: Request) {
  const session = await getUserSession(request);
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/login",
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}

// Fonction simulée pour récupérer un utilisateur
// En production, remplacer par un appel à votre base de données
async function getUserById(id: string, role: string, regionId?: string): Promise<User | null> {
  // Simuler des utilisateurs de test
  const testUsers: Record<string, User> = {
    "super-admin-1": {
      id: "super-admin-1",
      name: "Super Admin",
      email: "superadmin@example.com",
      role: "super_admin",
      permissions: ["*"]
    },
    "admin-1": {
      id: "admin-1",
      name: "Admin Région",
      email: "admin@example.com",
      role: "admin",
      region_id: "france",
      permissions: ["manage_personnel", "manage_drivers", "manage_billing"]
    },
    "partner-1": {
      id: "partner-1",
      name: "Partenaire Gouvernement",
      email: "partner@example.com",
      role: "partener",
      region_id: "france",
      permissions: ["audit", "compliance", "reports"]
    },
    "personnel-1": {
      id: "personnel-1",
      name: "Personnel Support",
      email: "personnel@example.com",
      role: "personnel",
      region_id: "france",
      permissions: ["view_drivers", "manage_support", "view_trips"]
    }
  };
  
  return testUsers[id] || null;
}