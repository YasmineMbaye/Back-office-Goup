import { getDashboardData } from "../../server/data/dashboard.server";
import { requireSuperAdmin } from "../../server/auth/auth.server";
import { DashboardLayout } from "../../components/dashboard/dashboard-layout";
import { RegionLayout } from "~/components/regions/Region-layout";

export async function loader({ request }: { request: Request }) {
  const { user } = await requireSuperAdmin({ request });
  const dashboardData = getDashboardData(user.role, user.region_id);
  
  return {
    user,
    dashboardData
  };
}

export default function Home() {
  return <RegionLayout title="Régions" role="super_admin" />;
}
