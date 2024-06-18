// eslint-disable-next-line no-unused-vars
import React from "react";
import ImgnyaBG from "./../../../assets/assets/image/image1.jpg";

function AppMessageDoctor() {
    return (
        <>
            <div className="relative w-full">
                <header className="fixed w-full flex  gap-4 items-center border-b border-stone-200 py-4 px-6 bg-stone-100">
                    <div className="min-w-10 min-h-10 max-w-10 max-h-10">
                        <img
                            src={ImgnyaBG}
                            className="size-10 object-cover object-center rounded-2xl"
                            alt=""
                        />
                    </div>
                    <h1>Dr. Michelle Alexandra </h1>
                </header>
            </div>
        </>
    );
}

export default AppMessageDoctor;
