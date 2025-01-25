import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div className="lg:px-6 px-2">
      <Toaster />
      <Navbar />
      <main className="min-h-svh relative overflow-hidden">
        <Outlet />
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
