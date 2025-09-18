import { route, type RouteConfig } from "@react-router/dev/routes";

export default [
  route("/login", "./pages/auth/login.tsx"),
  route("/logout", "./pages/auth/logout.tsx")
] satisfies RouteConfig;