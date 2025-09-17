import { index, prefix, type RouteConfig, } from "@react-router/dev/routes";

export default [ 
    ...prefix("master",[
        index("./pages/super_admin/home.tsx")
    ])
 ] satisfies RouteConfig;
