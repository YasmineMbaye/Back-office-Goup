import { getDashboardData } from "../../server/data/dashboard.server";
import { requirePersonnel } from "../../server/auth/auth.server";
import { DashboardLayout } from "../../components/dashboard/dashboard-layout";
import ChauffeurpersLayout from "~/components/personnel/Chauffeur-layout";
import { formdialogchauffeur as action} from "~/server/actions/currency.server";

export {action}


export async function loader({ request }: { request: Request }) {
  const { user } = await requirePersonnel({ request });
  const dashboardData = getDashboardData(user.role, user.region_id);
  
  return {
    user,
    dashboardData
  };
}

export default function Home() {
  return <ChauffeurpersLayout title="Chauffeur" role="personnel" />;
}
