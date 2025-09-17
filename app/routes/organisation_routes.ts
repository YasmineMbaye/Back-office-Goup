import { index, prefix, type RouteConfig, } from "@react-router/dev/routes";

export default [ 
    ...prefix(
        "/organisation",
        [
            index("./pages/organisation/home.tsx")
        ]
    )
 ] satisfies RouteConfig;
