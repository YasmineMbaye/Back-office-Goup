import { getDashboardData } from "../../server/data/dashboard.server";
import { requireAdmin } from "../../server/auth/auth.server";
import { DashboardLayout } from "../../components/dashboard/dashboard-layout";

export async function loader({ request }: { request: Request }) {
  const { user } = await requireAdmin({ request });
  const dashboardData = getDashboardData(user.role, user.region_id);
  
  return {
    user,
    dashboardData
  };
}

export default function Home() {
  return <DashboardLayout title="Dashboard Admin Régional" role="admin" />;
}
