import { Outlet } from "react-router-dom";
import NavBar2 from "../components/NavBar2";
import Foter from "../components/Footer";

const LoginLayout = () => {
    return (
        <>
            <div className="bg-stone-100">
                <NavBar2 />
                <Outlet />
            </div>
        </>
    );
};

export default LoginLayout;
