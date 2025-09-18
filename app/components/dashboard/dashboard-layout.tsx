import { useLoaderData, Await } from "react-router";
import { Suspense } from "react";
import { ClientChartWrapper } from "../charts/client-chart-wrapper";
import { DashboardSkeleton } from "../loading/dashboard-skeleton";
import { ErrorBoundary } from "../ui/error-boundary";
import { TrendingUp, TrendingDown } from "lucide-react";
import type { UserRole } from "../../types/navigation";

interface DashboardLayoutProps {
  title: string;
  role: UserRole;
}

export function DashboardLayout({ title, role }: DashboardLayoutProps) {
  const { user, dashboardData } = useLoaderData<any>();

  return (
    <ErrorBoundary>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <p className="text-lg text-gray-600 mt-2">Bienvenue, {user.name}</p>
          {user.region_id && (
            <p className="text-base text-gray-500 mt-1">Région: {user.region_id}</p>
          )}
        </div>
        
        <Suspense fallback={<DashboardSkeleton />}>
          <Await resolve={dashboardData}>
            {(data) => (
              <>
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {data.stats.map((stat: any, index: number) => (
                    <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-base font-medium text-gray-600">{stat.title}</p>
                          <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                        </div>
                        <div className={`flex items-center text-base font-medium ${
                          stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stat.changeType === 'increase' ? (
                            <TrendingUp className="w-5 h-5 mr-1" />
                          ) : (
                            <TrendingDown className="w-5 h-5 mr-1" />
                          )}
                          {Math.abs(stat.change)}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Charts */}
                <ClientChartWrapper role={role} data={data.chartData} />

                {/* Recent Activity & KPIs */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Activité Récente</h3>
                    <div className="space-y-4">
                      {data.recentActivity.map((activity: any, index: number) => (
                        <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                          <div>
                            <p className="text-base font-medium text-gray-900">
                              {activity.action || activity.driver || activity.ticket || activity.type}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                              {activity.region || activity.status || activity.client || activity.entity}
                            </p>
                          </div>
                          <span className="text-sm text-gray-400 font-medium">{activity.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Indicateurs Clés</h3>
                    <div className="space-y-5">
                      {data.kpis.map((kpi: any, index: number) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-base text-gray-600 font-medium">{kpi.label}</span>
                          <span className="text-lg font-bold text-gray-900">
                            {kpi.value}{kpi.unit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </Await>
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}