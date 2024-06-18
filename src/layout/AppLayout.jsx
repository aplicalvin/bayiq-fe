// import React from "react";
import { Outlet } from "react-router-dom";
import Michie from "../assets/assets/image/pattern-1.png";
import AppFooter from "../app/components/AppFooter";

function AppLayout() {
    return (
        <>
            <div
                className="bg-repeat bg-center h-screen"
                style={{ backgroundImage: `url(${Michie})` }}
            >
                <div className="w-full h-full bg-stone-400/70">
                    <div className="max-w-sm mx-auto bg-primary-50 overflow-y-scroll h-screen">
                        <div className="mb-32">
                            <Outlet />
                        </div>
                        <div className="absolute bottom-0 z-50 max-w-sm w-full bg-white px-8 py-6">
                            <AppFooter />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AppLayout;
