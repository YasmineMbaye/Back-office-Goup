import adminRoutes from "./routes/admin_routes";
import superAdminRoute from "./routes/super_admin_route";
import partenerRoutes from "./routes/partener_routes";
import personnelRoutes from "./routes/personnel_routes";
import { layout, type RouteConfig } from "@react-router/dev/routes";

export default [
  layout("./components/layout/Layout.tsx", [
    ...adminRoutes,
    ...partenerRoutes,
    ...personnelRoutes,
    ...superAdminRoute,
  ]),
] satisfies RouteConfig;
