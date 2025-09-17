import { Outlet } from "react-router";

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
      <div className="w-full h-[80px] bg-white/50 shadow "></div>    

      navigation par profile
    </nav>
  );
};
