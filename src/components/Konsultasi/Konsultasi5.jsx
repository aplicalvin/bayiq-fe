import TestiCard from "./TestiCard";
import { Link } from "react-router-dom";
import React from "react";

function Konsultasi5() {
    return (
        <>
            <div className="flex justify-center w-full h-fit  place-self-center">
                <div className="max-w-[1440px] w-full px-6 md:px-20 py-12 justify-between grid gap-6">
                    <div>
                        <h1 className="text-2xl text-stone-800 font-bold">
                            Testimoni Pelanggan
                        </h1>
                        <p className="text-base text-stone-500">
                            Jangan percaya kami, buktikan sendiri dari para user
                            yang sudah mencobanya
                        </p>
                    </div>
                    {/* testimonial card start here */}
                    <div className="w-full h-fit justify-start items-start gap-6 grid lg:inline-flex">
                        <TestiCard />
                        <TestiCard />
                        <TestiCard />
                        <Link
                            className="grid grow shrink basis-0 h-48 px-6 py-3 bg-rose-50 rounded-3xl border border-primary-400 hover:bg-primary-400 justify-start gap-3 bg-primary-100 self-stretch flex-col  text-stone-500 text-xl font-bold leading-7 place-content-center"
                            to="/testimoni"
                        >
                            Cek Testimoni Lainnya
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Konsultasi5;
