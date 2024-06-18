// eslint-disable-next-line no-unused-vars
import React from "react";
import AppHeader1 from "./components/AppHeader1";
import AppMessageList from "./Message/AppMessageList";
import { Outlet } from "react-router-dom";

function AppMessage() {
    return (
        <>
            <div className="flex w-full h-full">
                <div className="bg-primary-100 max-w-96 w-full">
                    <AppHeader1 pageTitle={"Pesan"} />
                    <AppMessageList />
                </div>
                <div className="bg-primary-50 w-full">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default AppMessage;
