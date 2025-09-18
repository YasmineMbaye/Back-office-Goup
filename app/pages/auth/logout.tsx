import type { ActionFunctionArgs } from "react-router";
import { logout } from "../../server/auth/session.server";

export async function action({ request }: ActionFunctionArgs) {
  return logout(request);
}

export async function loader() {
  // Rediriger vers login si accédé directement
  return new Response(null, {
    status: 302,
    headers: { Location: "/login" },
  });
}

export default function Logout() {
  return null;
}