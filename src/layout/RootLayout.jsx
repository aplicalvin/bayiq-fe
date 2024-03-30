import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const RootLayout = () => {
    return (
        <>
            <div className="bg-stone-100">
                <NavBar />
                <Outlet />
            </div>
        </>
    );
};

export default RootLayout;
