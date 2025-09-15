
import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("components/layout/Backofficelayout.tsx",[
        route("dashboard","view/Dashboard.tsx"),
    ])
]