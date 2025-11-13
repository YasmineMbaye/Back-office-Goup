import { LayoutDashboard, FileCheck, Shield, BarChart3, AlertTriangle } from 'lucide-react';
import type { NavItem } from '../../types/navigation';

export const partenerNavigation: NavItem[] = [
  {
    title: 'Dashboard',
    path: '/partener',
    icon: LayoutDashboard,
    end: true
  },
  {
    title: 'Audits',
    path: '/partener/audits',
    icon: FileCheck
  },
  {
    title: 'Conformité',
    path: '/partener/compliance',
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