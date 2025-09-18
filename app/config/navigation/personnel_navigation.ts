import { LayoutDashboard, Car, Users, Headphones, MapPin } from 'lucide-react';
import type { NavItem } from '../../types/navigation';

export const personnelNavigation: NavItem[] = [
  {
    title: 'Dashboard',
    path: '/personnel',
    icon: LayoutDashboard,
    end: true
  },
  {
    title: 'Chauffeurs',
    path: '/personnel/drivers',
    icon: Car
  },
  {
    title: 'Clients',
    path: '/personnel/customers',
    icon: Users
  },
  {
    title: 'Support',
    path: '/personnel/support',
    icon: Headphones
  },
  {
    title: 'Trajets',
    path: '/personnel/trips',
    icon: MapPin
  }
];