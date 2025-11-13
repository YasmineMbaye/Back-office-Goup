import { index, prefix, route, type RouteConfig, } from "@react-router/dev/routes";

export default [ 
    ...prefix("personnel",[
        index("./pages/personnel/home.tsx"),
        route("drivers", "./pages/personnel/chauffeur.tsx"),
        route("customers", "./pages/personnel/client.tsx"),
    ])
 ] satisfies RouteConfig;
