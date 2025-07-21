import { Outlet } from "react-router-dom";
import Footer from "@/pages/landing/_components/Footer";
import Navbar from "@/pages/landing/_components/Nabar/mobileNav";

const MainLayout = () => {
  return (
    <div className="w-screen min-h-screen h-screen overflow-x-hidden overflow-y-scroll flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
