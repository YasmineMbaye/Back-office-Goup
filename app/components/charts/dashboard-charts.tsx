import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { ChartWrapper } from './chart-wrapper';
import type { ChartData } from '../../server/data/dashboard.server';

// Palette de couleurs professionnelle et moderne
const COLORS = [
  '#2563EB', // Bleu principal (primary)
  '#10B981', // Vert (succès)
  '#F59E0B', // Orange (attention)
  '#EF4444', // Rouge (erreur)
  '#8B5CF6', // Violet (secondaire)
  '#06B6D4', // Cyan (info)
  '#84CC16', // Vert lime
  '#F97316', // Orange foncé
];

// Couleurs pour les états spécifiques
const STATE_COLORS = {
  primary: '#2563EB',
  success: '#10B981',
  warning: '#F59E0B',
  danger: '#EF4444',
  info: '#06B6D4',
  dark: '#1F2937',
  light: '#F3F4F6'
};

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
      <ChartWrapper title="Utilisateurs de la region" description="Répartition des utilisateurs actifs" variant="primary">
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" stroke="#6B7280" fontSize={14} />
            <YAxis stroke="#6B7280" fontSize={14} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1F2937',
                border: 'none',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '14px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Bar dataKey="users" fill={STATE_COLORS.primary} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartWrapper>

      <ChartWrapper title="Revenus de la region" description="Revenus mensuels par région" variant="success">
        <ResponsiveContainer width="100%" height={320}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" stroke="#6B7280" fontSize={14} />
            <YAxis stroke="#6B7280" fontSize={14} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1F2937',
                border: 'none',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '14px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke={STATE_COLORS.success}
              fill={`${STATE_COLORS.success}20`}
              strokeWidth={3}
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
      <ChartWrapper title="Courses par Heure" description="Activité quotidienne" variant="info">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="time" stroke="#6B7280" fontSize={12} />
            <YAxis stroke="#6B7280" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1F2937',
                border: 'none',
                borderRadius: '8px',
                color: '#fff',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Line
              type="monotone"
              dataKey="trips"
              stroke={STATE_COLORS.info}
              strokeWidth={3}
              dot={{ fill: STATE_COLORS.info, strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: STATE_COLORS.info }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartWrapper>

      <ChartWrapper title="Revenus par Heure" description="Revenus générés dans la journée" variant="warning">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="time" stroke="#6B7280" fontSize={12} />
            <YAxis stroke="#6B7280" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1F2937',
                border: 'none',
                borderRadius: '8px',
                color: '#fff',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Bar dataKey="revenue" fill={STATE_COLORS.warning} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </div>
  );
}

function PartnerCharts({ data }: { data: ChartData[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ChartWrapper title="Conformité par Catégorie" description="Taux de réussite aux audits" variant="success">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis type="number" stroke="#6B7280" fontSize={12} />
            <YAxis dataKey="category" type="category" stroke="#6B7280" fontSize={12} width={120} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1F2937',
                border: 'none',
                borderRadius: '8px',
                color: '#fff',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Bar dataKey="passed" fill={STATE_COLORS.success} radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartWrapper>

      <ChartWrapper title="Répartition Audits" description="Statut des audits mensuels" variant="primary">
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
                backgroundColor: '#1F2937',
                border: 'none',
                borderRadius: '8px',
                color: '#fff',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
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
      <ChartWrapper title="Tickets Support" description="Évolution des tickets dans la journée" variant="warning">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="hour" stroke="#6B7280" fontSize={12} />
            <YAxis stroke="#6B7280" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1F2937',
                border: 'none',
                borderRadius: '8px',
                color: '#fff',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Area
              type="monotone"
              dataKey="tickets"
              stackId="1"
              stroke={STATE_COLORS.danger}
              fill={`${STATE_COLORS.danger}40`}
            />
            <Area
              type="monotone"
              dataKey="resolved"
              stackId="1"
              stroke={STATE_COLORS.success}
              fill={`${STATE_COLORS.success}60`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartWrapper>

      <ChartWrapper title="Taux de Résolution" description="Performance du support client" variant="success">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="hour" stroke="#6B7280" fontSize={12} />
            <YAxis stroke="#6B7280" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1F2937',
                border: 'none',
                borderRadius: '8px',
                color: '#fff',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Line
              type="monotone"
              dataKey="resolved"
              stroke={STATE_COLORS.success}
              strokeWidth={3}
              dot={{ fill: STATE_COLORS.success, strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: STATE_COLORS.success }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </div>
  );
}