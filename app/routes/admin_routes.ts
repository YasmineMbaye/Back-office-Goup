import { index, prefix, type RouteConfig, } from "@react-router/dev/routes";

export default [ 
    ...prefix(
        "admin",
        [
            index("./pages/admin/home.tsx")
        ]
    )
 ] satisfies RouteConfig;
