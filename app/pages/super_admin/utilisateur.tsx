import { getDashboardData } from "../../server/data/dashboard.server";
import { requireSuperAdmin } from "../../server/auth/auth.server";
import { DashboardLayout } from "../../components/dashboard/dashboard-layout";
import { RegionLayout } from "~/components/superadmin/Region-layout";
import {Utilisateurlayout} from "~/components/superadmin/Utilisateurlayout"
import { formdialoguser as action} from "~/server/actions/currency.server";

export {action}
export async function loader({ request }: { request: Request }) {
  const { user } = await requireSuperAdmin({ request });
  const dashboardData = getDashboardData(user.role, user.region_id);
  
  return {
    user,
    dashboardData
  };
}

export default function Home() {
  return   <Utilisateurlayout title="Utilisateur" role="super_admin"/>         
  
}
