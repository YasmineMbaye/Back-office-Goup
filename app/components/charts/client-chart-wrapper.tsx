import { useEffect, useState } from 'react';
import { DashboardCharts } from './dashboard-charts';
import type { UserRole } from '../../types/navigation';
import type { ChartData } from '../../server/data/dashboard.server';

interface ClientChartWrapperProps {
  role: UserRole;
  data: ChartData[];
}

export function ClientChartWrapper({ role, data }: ClientChartWrapperProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
          <div className="h-[300px] flex items-center justify-center text-gray-400">
            Chargement des graphiques...
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
          <div className="h-[300px] flex items-center justify-center text-gray-400">
            Chargement des graphiques...
          </div>
        </div>
      </div>
    );
  }

  return <DashboardCharts role={role} data={data} />;
}