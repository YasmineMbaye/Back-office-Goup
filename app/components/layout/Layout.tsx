import { NavLink, Outlet } from "react-router";
import { LayoutDashboard, Users } from 'lucide-react';

type NavItemProps = { 
  title:string
  path:string
  icon: React.ComponentType<{size?: number}>
  end?:boolean
}
export default function Layout() {
  return (
    <main className="w-full h-screen flex ">
      <NavMenu />
      <div className="w-full h-full ">
        <header className="w-full h-[80px] bg-white shadow "></header>
        <div className="overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

const NavMenu = () => {
  return (
    <nav className="w-[18%] h-full bg-gray-200 shadow">
      <div className="w-full h-[80px] bg-white/50 shadow flex items-center justify-center">
        <img src="/app/assets/images/logo_light_mode.png" alt="Logo" className="w-full h-full object-contain p-4" />
      </div> 
      <div className="overflow-y-auto w-full">
        <NavItem title="Dashboard" path="/master" icon={LayoutDashboard} end={true} />
        <NavItem title="Users" path="/users" icon={Users} /> 
      </div>   
      navigation par profile
    </nav>
  );
};

const NavItem =({title,path,icon: Icon,end=false}:NavItemProps)=>{ 
  return(
    <NavLink to={path} className={({isActive})=>`w-full h-[50px] flex items-center justify-start px-2 gap-4 ${isActive?'bg-black text-white font-bold':''}`} end={end}>
      <Icon size={24} />
      {title}
    </NavLink>
  )
}
