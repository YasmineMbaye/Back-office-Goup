import { LayoutDashboard, Users, Globe, Settings, BarChart3, Server } from 'lucide-react';
import type { NavItem } from '../../types/navigation';

export const superAdminNavigation: NavItem[] = [
  {
    title: 'Dashboard',
    path: '/master',
    icon: LayoutDashboard,
    end: true
  },
  {
    title: 'Régions',
    path: '/master/regions',
    icon: Globe,
    
  },
  {
    title: 'Utilisateurs Globaux',
    path: '/master/users',
    icon: Users
  },
  {
    title: 'Ressources Serveur',
    path: '/master/servers',
    icon: Server
  },
  {
    title: 'Analytics Global',
    path: '/master/analytics',
    icon: BarChart3
  },
  {
    title: 'Configuration',
    path: '/master/settings',
    icon: Settings
  }
];