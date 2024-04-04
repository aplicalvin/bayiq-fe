import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Foter from "../components/Footer";

const RootLayout = () => {
    return (
        <>
            <div className="flex flex-col bg-stone-100 min-h-screen cekbang justify-between">
                <NavBar />
                <Outlet />
                <Foter />
            </div>
        </>
    );
};

export default RootLayout;
