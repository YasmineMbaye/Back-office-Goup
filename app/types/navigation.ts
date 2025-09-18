export interface NavItem {
  title: string;
  path: string;
  icon: React.ComponentType<{ size?: number }>;
  end?: boolean;
  children?: NavItem[];
}

export type UserRole = 'super_admin' | 'admin' | 'partener' | 'personnel';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  region_id?: string;
  permissions: string[];
}

export interface Region {
  id: string;
  name: string;
  country: string;
  admin_id?: string;
  is_active: boolean;
}