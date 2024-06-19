// import React from "react";
import { Outlet } from "react-router-dom";
// import Michie from "../assets/assets/image/pattern-1.png";
import AppSidebar from "../app/components/AppSidebar";

function AppLayoutD() {
    return (
        <>
            <div className="bg-primary-950 w-screen h-screen">
                <div className="flex w-screen bg-green-100 justify-start max-w-[1880px] m-auto">
                    <div>
                        <AppSidebar />
                    </div>
                    <div className="bg-stone-200 w-full overflow-y-scroll h-screen">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AppLayoutD;
