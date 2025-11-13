import { index, prefix, route, type RouteConfig, } from "@react-router/dev/routes";

export default [ 
    ...prefix("partener",[
        index('./pages/partener/home.tsx'),
        route("audits", "./pages/partener/audit.tsx"),
        route("compliance", "./pages/partener/conformite.tsx"),
    ])
 ] satisfies RouteConfig;
