import type { LoaderFunctionArgs } from "react-router";
import { getCurrencies } from "../../server/data/currency.server";

export async function loader({ request }: LoaderFunctionArgs) {
  return getCurrencies();
}

export default function CurrenciesAPI() {
  return null;
}