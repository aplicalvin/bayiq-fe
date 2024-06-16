// import React from "react";
import { Outlet } from "react-router-dom";
import Michie from "../assets/assets/image/pattern-1.png";

function AppLayout() {
    return (
        <>
            <div
                className="bg-repeat bg-center h-screen"
                style={{ backgroundImage: `url(${Michie})` }}
            >
                <div className="w-full h-full bg-stone-400/70">
                    <div className="max-w-sm mx-auto bg-primary-100 h-screen p-4">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AppLayout;
