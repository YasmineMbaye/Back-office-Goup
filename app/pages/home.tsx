import type { LoaderFunctionArgs } from "react-router";
import { redirect } from "react-router";
import { getUserFromSession } from "../server/auth/session.server";
import { getRedirectPath } from "../server/auth/redirect.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await getUserFromSession(request);
  
  if (!user) {
    throw redirect("/login");
  }

  // Rediriger selon le rôle vers le dashboard approprié
  const dashboardPath = getRedirectPath(user.role);
  throw redirect(dashboardPath);
}

export default function Home() {
  return null;
}