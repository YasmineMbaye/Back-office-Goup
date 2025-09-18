import type { LoaderFunctionArgs } from "react-router";
import { redirect } from "react-router";
import { getUserFromSession } from "../server/auth/session.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await getUserFromSession(request);
  
  if (!user) {
    throw redirect("/login");
  }

  // Rediriger selon le rôle
  switch (user.role) {
    case "super_admin":
      throw redirect("/master");
    case "admin":
      throw redirect("/admin");
    case "partener":
      throw redirect("/partener");
    case "personnel":
      throw redirect("/personnel");
    default:
      throw redirect("/login");
  }
}

export default function Home() {
  return null;
}