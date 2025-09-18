import { DashboardCharts } from './dashboard-charts';
import type { UserRole } from '../../types/navigation';
import type { ChartData } from '../../server/data/dashboard.server';

interface ClientChartWrapperProps {
  role: UserRole;
  data: ChartData[];
}

export function ClientChartWrapper({ role, data }: ClientChartWrapperProps) {
  return <DashboardCharts role={role} data={data} />;
}