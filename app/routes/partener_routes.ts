import { index, prefix, type RouteConfig, } from "@react-router/dev/routes";

export default [ 
    ...prefix("partener",[
        index('./pages/partener/home.tsx')
    ])
 ] satisfies RouteConfig;
