import { getDashboardData } from "../../server/data/dashboard.server";
import { requirePartner } from "../../server/auth/auth.server";
import { DashboardLayout } from "../../components/dashboard/dashboard-layout";
import AuditLayout from "~/components/partener/Audit-layout";
import ConformiteLayout from "~/components/partener/Conformite-layout";

export async function loader({ request }: { request: Request }) {
  const { user } = await requirePartner({ request });
  const dashboardData = getDashboardData(user.role, user.region_id);
  
  return {
    user,
    dashboardData
  };
}

export default function Home() {
  return <ConformiteLayout title="Conformite" role="partener" />;
}
