// import React from "react";
import Logo from "./../assets/assets/logo.png";
import { Link } from "react-router-dom";
import { Notification } from "iconsax-react";

function AppDashboard() {
    return (
        <>
            <div className="grid gap-4">
                <header className="grid grid-flow-col justify-between items-center">
                    <img src={Logo} className="w-24" alt="" />
                    <Link to={"/app/"}>
                        <Notification
                            size="32"
                            variant="Bulk"
                            className="text-primary-400 hover:text-primary-700"
                        />
                    </Link>
                </header>
                {/* Greetings */}
                <div className="grid gap-1">
                    <h1 className="text-stone-700 font-light text-md">
                        Selamat Datang,
                    </h1>
                    <h1 className="text-stone-900 font-bold text-2xl">
                        Reno Aderelyan
                    </h1>
                </div>
                {/* Greetings */}
            </div>
        </>
    );
}

export default AppDashboard;
