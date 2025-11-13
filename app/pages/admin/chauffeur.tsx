
import ChauffeurLayout from "~/components/admin/chauffeur-layout";
import RoledroitLayout from "~/components/admin/role-droit-layout";
import { formdialogpersonel as action} from "~/server/actions/currency.server";

export {action}


export default function Home() {
  return <ChauffeurLayout title="Chauffeur" role="admin" />;
}
