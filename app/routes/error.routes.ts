import { route } from "@react-router/dev/routes";

export default [
  route("/errors/403", "./pages/errors/403.tsx"),
  route("/errors/404", "./pages/errors/404.tsx"),
  route("/errors/500", "./pages/errors/500.tsx"),
];