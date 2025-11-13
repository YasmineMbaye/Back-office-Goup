import { index, prefix, route, type RouteConfig, } from "@react-router/dev/routes";

export default [ 
    ...prefix(
        "admin",
        [
            index("./pages/admin/home.tsx"),
            route("personnel", "./pages/admin/personel.tsx"),
            route("roles", "./pages/admin/role-droit.tsx"),
          
            route("drivers", "./pages/admin/chauffeur.tsx"),
            route("roles/ajoutrole", "./pages/admin/ajoutrole.tsx"),
        ]
    )
 ] satisfies RouteConfig;
