import { useLoaderData } from 'react-router';
import type { LoaderFunctionArgs } from 'react-router';
import { requireUser } from '../../server/auth/auth.server';
import { getRedirectPath } from '../../server/auth/redirect.server';
import { redirect } from 'react-router';

export async function loader({ request }: LoaderFunctionArgs) {
  const { user } = await requireUser({ request });
  
  // Rediriger l'utilisateur vers son dashboard spécifique
  const dashboardPath = getRedirectPath(user.role);
  throw redirect(dashboardPath);
}

export default function DashboardHome() {
  // Ce composant ne devrait jamais être rendu car on redirige toujours
  return null;
}