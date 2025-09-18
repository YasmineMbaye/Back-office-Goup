import { route } from "@react-router/dev/routes";

export default [
  route("/api/currencies", "./server/data/currency.server.ts", { 
    loader: async () => {
      const { getCurrencies } = await import("../server/data/currency.server");
      return getCurrencies();
    }
  }),
  route("/api/currency/:code", "./server/data/currency.server.ts", {
    loader: async ({ params }) => {
      const { getCurrencyByCode } = await import("../server/data/currency.server");
      return getCurrencyByCode(params.code!);
    }
  }),
  route("/api/set-currency", "./server/actions/currency.server.ts", {
    action: async ({ request }) => {
      const { setCurrencyAction } = await import("../server/actions/currency.server");
      return setCurrencyAction({ request });
    }
  })
];