import { Outlet } from "react-router-dom";
import Footer from "../components/SharedComponents/Footer";
import Navbar from "../components/SharedComponents/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
