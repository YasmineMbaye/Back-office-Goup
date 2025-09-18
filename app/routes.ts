import adminRoutes from "./routes/admin_routes";
import superAdminRoutes from "./routes/super_admin_route";
import partenerRoutes from "./routes/partener_routes";
import personnelRoutes from "./routes/personnel_routes";
import authRoutes from "./routes/auth.routes";
import currencyRoutes from "./routes/currency.routes";
import errorRoutes from "./routes/error.routes";
import { layout, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  // Routes API
  ...currencyRoutes,
  
  // Routes d'erreurs (sans layout)
  ...errorRoutes,
  
  // Routes publiques (sans layout)
  ...authRoutes,
  route("/", "./pages/home.tsx"),
  
  // Route de redirection vers le dashboard selon le rôle
  route("/dashboard", "./pages/dashboard/dashboard-home.tsx"),
  
  // Page d'erreur globale (fallback)
  route("/error", "./pages/error.tsx"),
  
  // Routes protégées avec layout
  layout("./components/layout/Layout.tsx", [
    ...adminRoutes,
    ...partenerRoutes,
    ...personnelRoutes,
    ...superAdminRoutes,
  ]),
] satisfies RouteConfig;
