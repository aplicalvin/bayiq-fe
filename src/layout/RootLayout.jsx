import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Foter from "../components/Footer";

const RootLayout = () => {
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
