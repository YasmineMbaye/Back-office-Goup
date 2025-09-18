import { LayoutDashboard, Users, UserPlus, Bell, CreditCard, Car, BarChart3 } from 'lucide-react';
import type { NavItem } from '../../types/navigation';

export const adminNavigation: NavItem[] = [
  {
    title: 'Dashboard',
    path: '/admin',
    icon: LayoutDashboard,
    end: true
  },
  {
    title: 'Personnel',
    path: '/admin/personnel',
    icon: Users
  },
  {
    title: 'Rôles & Droits',
    path: '/admin/roles',
    icon: UserPlus
  },
  {
    title: 'Chauffeurs',
    path: '/admin/drivers',
    icon: Car
  },
  {
    title: 'Notifications',
    path: '/admin/notifications',
    icon: Bell
  },
  {
    title: 'Facturation',
    path: '/admin/billing',
    icon: CreditCard
  },
  {
    title: 'Analytics Région',
    path: '/admin/analytics',
    icon: BarChart3
  }
];