import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Foter from "../components/Footer";
import RefToken from "../middleware/refreshToken";
import { useEffect } from "react";

const RootLayout = () => {
  const { refresh_token } = RefToken();
  useEffect(() => {
    refresh_token();
  }, []);
  return (
    <>
      <div className="bg-stone-100">
        <NavBar />
        <Outlet />
        <Foter />
      </div>
    </>
  );
};

export default RootLayout;
