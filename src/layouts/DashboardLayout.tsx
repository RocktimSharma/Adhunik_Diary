
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="px-2 fill">
      <DashboardNavbar/>
      <Outlet/>
    </div>

  );
};

export default DashboardLayout;
