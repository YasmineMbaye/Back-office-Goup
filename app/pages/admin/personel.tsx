import PersonnelLayout from "~/components/admin/personnel-layout";
import { formdialogpersonel as action} from "~/server/actions/currency.server";

export {action}


export default function Home() {
  return <PersonnelLayout title="Personnel" role="admin" />;
}
