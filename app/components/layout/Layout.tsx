import { Outlet } from "react-router";

export default function Layout() {
  return (
    <main className="w-full h-screen ">
      <header className="w-full h-[80px] bg-white shadow "></header>
      <div className=" w-full h-[calc(100vh-80px)]  flex  gap-2">
        <NavMenu />
        <div>
          <Outlet />
        </div>
      </div>
    </main>
  );
}

const NavMenu = () => {
  return (
    <nav className="w-[320px] h-full bg-gray-200 shadow">navigation par profile</nav>
  );
};
