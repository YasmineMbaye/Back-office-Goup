import type { LoaderFunctionArgs } from "react-router";
import { getCurrencyByCode } from "../../server/data/currency.server";

export async function loader({ params }: LoaderFunctionArgs) {
  return getCurrencyByCode(params.code!);
}

export default function CurrencyAPI() {
  return null;
}