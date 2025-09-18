import { LayoutDashboard, FileCheck, Shield, BarChart3, AlertTriangle } from 'lucide-react';
import type { NavItem } from '../../types/navigation';

export const partenerNavigation: NavItem[] = [
  {
    title: 'Dashboard',
    path: '/partner',
    icon: LayoutDashboard,
    end: true
  },
  {
    title: 'Audits',
    path: '/partner/audits',
    icon: FileCheck
  },
  {
    title: 'Conformité',
    path: '/partner/compliance',
    icon: Shield
  },
  {
    title: 'Rapports',
    path: '/partner/reports',
    icon: BarChart3
  },
  {
    title: 'Alertes',
    path: '/partner/alerts',
    icon: AlertTriangle
  }
];