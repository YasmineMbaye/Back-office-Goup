import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { ChartWrapper } from './chart-wrapper';
import type { ChartData } from '../../server/data/dashboard.server';

const COLORS = ['#000000', '#4B5563', '#9CA3AF', '#D1D5DB', '#E5E7EB'];

interface DashboardChartsProps {
  role: 'super_admin' | 'admin' | 'partener' | 'personnel';
  data: ChartData[];
}

export function DashboardCharts({ role, data }: DashboardChartsProps) {
  switch (role) {
    case 'super_admin':
      return <SuperAdminCharts data={data} />;
    case 'admin':
      return <AdminCharts data={data} />;
    case 'partener':
      return <PartnerCharts data={data} />;
    case 'personnel':
      return <PersonnelCharts data={data} />;
    default:
      return null;
  }
}

function SuperAdminCharts({ data }: { data: ChartData[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ChartWrapper title="Utilisateurs par Région" description="Répartition des utilisateurs actifs">
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" stroke="#6B7280" fontSize={14} />
            <YAxis stroke="#6B7280" fontSize={14} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#000', 
                border: 'none', 
                borderRadius: '8px',
                color: '#fff',
                fontSize: '14px'
              }}
            />
            <Bar dataKey="users" fill="#000000" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartWrapper>

      <ChartWrapper title="Revenus par Région" description="Revenus mensuels par région">
        <ResponsiveContainer width="100%" height={320}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" stroke="#6B7280" fontSize={14} />
            <YAxis stroke="#6B7280" fontSize={14} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#000', 
                border: 'none', 
                borderRadius: '8px',
                color: '#fff',
                fontSize: '14px'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke="#000000" 
              fill="#000000"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </div>
  );
}

function AdminCharts({ data }: { data: ChartData[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ChartWrapper title="Courses par Heure" description="Activité quotidienne">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="time" stroke="#6B7280" fontSize={12} />
            <YAxis stroke="#6B7280" fontSize={12} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#000', 
                border: 'none', 
                borderRadius: '8px',
                color: '#fff'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="trips" 
              stroke="#000000" 
              strokeWidth={3}
              dot={{ fill: '#000000', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartWrapper>

      <ChartWrapper title="Revenus par Heure" description="Revenus générés dans la journée">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="time" stroke="#6B7280" fontSize={12} />
            <YAxis stroke="#6B7280" fontSize={12} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#000', 
                border: 'none', 
                borderRadius: '8px',
                color: '#fff'
              }}
            />
            <Bar dataKey="revenue" fill="#000000" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </div>
  );
}

function PartnerCharts({ data }: { data: ChartData[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ChartWrapper title="Conformité par Catégorie" description="Taux de réussite aux audits">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis type="number" stroke="#6B7280" fontSize={12} />
            <YAxis dataKey="category" type="category" stroke="#6B7280" fontSize={12} width={120} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#000', 
                border: 'none', 
                borderRadius: '8px',
                color: '#fff'
              }}
            />
            <Bar dataKey="passed" fill="#000000" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartWrapper>

      <ChartWrapper title="Répartition Audits" description="Statut des audits mensuels">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={120}
              paddingAngle={5}
              dataKey="passed"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#000', 
                border: 'none', 
                borderRadius: '8px',
                color: '#fff'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </div>
  );
}

function PersonnelCharts({ data }: { data: ChartData[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ChartWrapper title="Tickets Support" description="Évolution des tickets dans la journée">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="hour" stroke="#6B7280" fontSize={12} />
            <YAxis stroke="#6B7280" fontSize={12} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#000', 
                border: 'none', 
                borderRadius: '8px',
                color: '#fff'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="tickets" 
              stackId="1"
              stroke="#666666" 
              fill="#666666"
            />
            <Area 
              type="monotone" 
              dataKey="resolved" 
              stackId="1"
              stroke="#000000" 
              fill="#000000"
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartWrapper>

      <ChartWrapper title="Taux de Résolution" description="Performance du support client">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="hour" stroke="#6B7280" fontSize={12} />
            <YAxis stroke="#6B7280" fontSize={12} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#000', 
                border: 'none', 
                borderRadius: '8px',
                color: '#fff'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="resolved" 
              stroke="#000000" 
              strokeWidth={3}
              dot={{ fill: '#000000', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </div>
  );
}