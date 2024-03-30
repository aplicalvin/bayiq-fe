"use client";

import { Button, Timeline } from "flowbite-react";
import AlurKonsul from "./AlurKonsultasi";

function Konsultasi4() {
    return (
        <>
            <div className="flex justify-center w-full h-fit  place-self-center">
                <div className="max-w-[1440px] w-full px-20 py-12 justify-between grid gap-6">
                    {/* List disini */}
                    <div className="border border-stone-300 rounded-3xl p-9 grid gap-8 bg-stone-50 cekbang">
                        <div className="">
                            <h1 className="text-2xl text-stone-800 font-bold">
                                Alur Konsultasi
                            </h1>
                        </div>
                        <div className="">
                            <Timeline horizontal>
                                <AlurKonsul />
                                <AlurKonsul />
                                <AlurKonsul />
                                <AlurKonsul />
                                <AlurKonsul />
                            </Timeline>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Konsultasi4;
