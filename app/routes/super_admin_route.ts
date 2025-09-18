import { index, prefix, route, type RouteConfig, } from "@react-router/dev/routes";

export default [ 
    ...prefix("master",[
        index("./pages/super_admin/home.tsx"),
        route("settings", "./pages/super_admin/settings.tsx"),
        route("regions", "./pages/super_admin/regions.tsx")
    ])
 ] satisfies RouteConfig;
