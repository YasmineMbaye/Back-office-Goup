import { route } from "@react-router/dev/routes";

export default [
  route("/api/currencies", "./pages/api/currencies.tsx"),
  route("/api/currency/:code", "./pages/api/currency.$code.tsx"),
  route("/api/set-currency", "./pages/api/set-currency.tsx")
];