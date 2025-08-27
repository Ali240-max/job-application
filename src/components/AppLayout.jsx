import { Outlet } from "react-router";
import NavBar from "./NavBar";

function AppLayout() {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
