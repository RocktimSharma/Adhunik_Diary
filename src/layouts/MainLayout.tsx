import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="px-2">
      <Navbar />
      <Outlet/>


    </div>

  );
};

export default MainLayout;
