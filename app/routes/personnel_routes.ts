import { index, prefix, type RouteConfig, } from "@react-router/dev/routes";

export default [ 
    ...prefix("personel",[
        index("./pages/personnel/home.tsx")
    ])
 ] satisfies RouteConfig;
