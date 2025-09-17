import { Outlet } from "react-router";

export default function Layout() {
  return (
    <main>
      <header></header>
      <NavMenu />
      <div>
        <Outlet />
      </div>
    </main>
  );
}

const NavMenu = () => {
  return <nav>navigation par profile</nav>;
};
