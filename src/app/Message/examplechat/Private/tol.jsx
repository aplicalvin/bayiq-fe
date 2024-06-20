// eslint-disable-next-line no-unused-vars
import React from "react";
import ImgnyaBG from "./../../../assets/assets/image/image1.jpg";
import ChatInput from "../ChatInput";
import AppChat from "./AppChat";

function AppMessageHeader() {
    return (
        <>
            <header className="flex h-20 gap-4 items-center border-b border-stone-200 py-4 px-6 bg-stone-100">
                <div className="flex gap-1 min-w-12 min-h-12 max-w-12 max-h-12">
                    <img
                        src={ImgnyaBG}
                        className="size-12 object-cover object-center rounded-full"
                        alt=""
                    />
                </div>
                <div className="grid gap-0.5">
                    <h1>Dr. Michelle Alexandra </h1>
                    <p className="text-xs font-thin text-stone-400">
                        Terakhir dilihat 09.00{" "}
                    </p>
                </div>
            </header>
        </>
    );
}

function AppMessagePrivate() {
    return (
        <>
            <div className="flex flex-col h-screen w-full ">
                {/* Header */}
                <div className="h-fit top-0 z-10 w-full ">
                    <AppMessageHeader />
                </div>

                {/* Chat Messages */}
                <div className=" bg-stone-50 py-2 overflow-auto">
                    <div className="mt-4">
                        <AppChat />
                    </div>

                    {/* Input Field */}
                </div>
                <div className="h-fit bottom-0 bg-neutral-300 ">
                    <ChatInput />
                </div>
            </div>
        </>
    );
}

export default AppMessagePrivate;
