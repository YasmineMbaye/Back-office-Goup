import { NavLink, Outlet, useLoaderData, Form } from "react-router";
import { LogOut, User } from 'lucide-react';
import { getNavigationForRole } from '../../config/navigation';
import { requireUser } from '../../server/auth/auth.server';

export const loader = requireUser;

type NavItemProps = { 
  title: string
  path: string
  icon: React.ComponentType<{size?: number}>
  end?: boolean
}

export default function Layout() {
  return (
    <main className="w-full h-screen flex bg-gray-50">
      <NavMenu />
      <div className="w-full h-full">
        <Header />
        <div className="overflow-y-auto h-[calc(100vh-80px)] bg-gray-50">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

const Header = () => {
  const { user } = useLoaderData<typeof loader>();
  
  return (
    <header className="w-full h-[80px] bg-black border-b border-gray-800 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold text-white">
          {user?.role === 'super_admin' && 'Super Administration'}
          {user?.role === 'admin' && 'Administration Régionale'}
          {user?.role === 'partener' && 'Espace Partner'}
          {user?.role === 'personnel' && 'Espace Personnel'}
        </h1>
        {user?.region_id && (
          <span className="text-base text-gray-400">Région: {user.region_id}</span>
        )}
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 text-gray-300">
          <User size={22} />
          <span className="text-base font-medium">{user?.name}</span>
        </div>
        <Form method="post" action="/logout">
          <button 
            type="submit"
            className="flex items-center gap-2 px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-colors"
          >
            <LogOut size={18} />
            Déconnexion
          </button>
        </Form>
      </div>
    </header>
  );
};

const NavMenu = () => {
  const { user } = useLoaderData<typeof loader>();
  
  if (!user) return null;
  
  const navigation = getNavigationForRole(user.role);
  
  return (
    <nav className="w-[280px] h-full bg-black border-r border-gray-800">
      <div className="w-full h-[80px] bg-black border-b border-gray-800 flex items-center justify-center">
        <img src="/app/assets/images/logo_dark_mode.png" alt="Logo" className="w-full h-full object-contain p-4" />
      </div> 
      <div className="overflow-y-auto w-full">
        {navigation.map((item, index) => (
          <NavItemComponent key={index} {...item} />
        ))}
      </div>   
    </nav>
  );
};

const NavItemComponent = ({ title, path, icon: Icon, end = false }: NavItemProps) => { 
  return (
    <NavLink 
      to={path} 
      className={({ isActive }) => 
        `w-full h-[56px] flex items-center justify-start px-6 gap-4 transition-all duration-200 ${
          isActive 
            ? 'bg-white text-black font-semibold border-r-4 border-black' 
            : 'text-gray-300 hover:text-white hover:bg-gray-900'
        }`
      } 
      end={end}
    >
      <Icon size={22} />
      <span className="text-base font-medium">{title}</span>
    </NavLink>
  );
};
