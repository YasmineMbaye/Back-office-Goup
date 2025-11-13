import { index, prefix, route, type RouteConfig, } from "@react-router/dev/routes";

export default [ 
    ...prefix("master",[
        index("./pages/super_admin/home.tsx"),
        route("settings", "./pages/super_admin/settings.tsx"),
        route("regions", "./pages/super_admin/regions.tsx"),
        route("users", "./pages/super_admin/utilisateur.tsx"),
        route("regions/:code", "./pages/super_admin/sn.tsx"),
        route("regions/:code/detail", "./pages/super_admin/detail.tsx")
    ])
 ] satisfies RouteConfig;
