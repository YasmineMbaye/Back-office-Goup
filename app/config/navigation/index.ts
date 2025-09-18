import { superAdminNavigation } from './super_admin_navigation';
import { adminNavigation } from './admin_navigation';
import { partenerNavigation } from './partener_navigation';
import { personnelNavigation } from './personnel_navigation';
import type { NavItem, UserRole } from '../../types/navigation';

export const navigationConfig: Record<UserRole, NavItem[]> = {
  super_admin: superAdminNavigation,
  admin: adminNavigation,
  partener: partenerNavigation,
  personnel: personnelNavigation
};

export function getNavigationForRole(role: UserRole): NavItem[] {
  return navigationConfig[role] || [];
}