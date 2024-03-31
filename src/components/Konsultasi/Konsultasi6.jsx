import TestiCard from "./TestiCard";
import { Link } from "react-router-dom";
import React from "react";
import FaqKonsul from "./FaqKonsul";

function Konsultasi6() {
    return (
        <>
            <div className="flex justify-center w-full h-fit  place-self-center">
                <div className="max-w-[1440px] w-full px-6 md:px-20 py-12 grid gap-6">
                    <div className="">
                        <h1 className="text-2xl text-stone-800 font-bold">
                            Pertanyaan Seputar Konsultasi
                        </h1>
                        {/* <p className="text-base text-stone-500">
                            Jangan percaya kami, buktikan sendiri dari para user
                            yang sudah mencobanya
                        </p> */}
                    </div>
                    {/* testimonial card start here */}
                    <div className="w-full max-w-7xl h-fit justify-start items-start gap-6 grid lg:inline-flex">
                        <FaqKonsul />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Konsultasi6;
