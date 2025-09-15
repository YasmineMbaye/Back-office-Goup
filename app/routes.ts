import { type RouteConfig, index } from "@react-router/dev/routes";
import BackofficeController from "./controller/BackofficeController";

export default [ ...BackofficeController ] satisfies RouteConfig;
