// eslint-disable-next-line no-unused-vars
import React from "react";
import AppHeader1 from "./components/AppHeader1";
import AppMessageList from "./Message/AppMessageList";
import { Outlet } from "react-router-dom";

function AppMessage() {
    return (
        <>
            <div className="flex h-screen">
                {/* Section paling kiri */}
                <div className="flex flex-col bg-white w-1/4 border-r border-stone-300">
                    <div className="h-fit">
                        <AppHeader1 pageTitle={"Pesan"} />
                    </div>
                    <div className="overflow-auto ">
                        <AppMessageList />
                    </div>
                </div>

                {/* Section tengah */}
                <div className="flex flex-col w-1/2 bg-primary-50">
                    <Outlet />
                </div>

                {/* Section paling kanan */}
                <div className="flex flex-col bg-white w-1/4 border-l border-stone-300">
                    <AppMessageList />
                </div>
            </div>
        </>
    );
}

export default AppMessage;
