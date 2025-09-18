import type { ActionFunctionArgs } from "react-router";
import { setCurrencyAction } from "../../server/actions/currency.server";

export async function action({ request }: ActionFunctionArgs) {
  return setCurrencyAction({ request });
}

export default function SetCurrencyAPI() {
  return null;
}