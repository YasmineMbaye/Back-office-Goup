
import RoledroitLayout from "~/components/admin/role-droit-layout";
import { formdialogroledroit as action} from "~/server/actions/currency.server";

export {action}


export default function Home() {
  return <RoledroitLayout title="Roles et Droit" role="admin" />;
}
