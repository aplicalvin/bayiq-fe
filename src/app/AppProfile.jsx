// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { Edit2 } from "iconsax-react";
import Pap from "./../assets/assets/image/image1.jpg";
import Bg from "./../assets/assets/image/pattern-1.png";

function AppProfile() {
    return (
        <>
            <header
                className="grid bg-primary-500 w-full h-36 bg-cover bg-center"
                style={{ backgroundImage: `url(${Bg})` }}
            >
                {/* Profil */}
                <div
                    className="mx-auto mt-12 rounded-full border-4 border-stone-400 size-40 bg-cover bg-center "
                    style={{ backgroundImage: `url(${Pap})` }}
                ></div>
            </header>
            {/* Text dibawah Foto */}
            <div className="grid gap-1 text-center mt-16 mb-4 py-2 mx-auto">
                <div className="flex gap-2 mx-auto w-fit items-center">
                    <h1 className="text-2xl font-bold text-center">
                        Reno Aderelyan
                    </h1>
                    <Link>
                        <Edit2
                            size="24"
                            className="text-stone-400"
                            variant="Outline"
                        />
                    </Link>
                </div>
                {/* Tanggal bergabung */}
                <div className="flex gap-1 text-sm text-stone-600 mx-auto w-fit">
                    <p className="">Bergabung sejak </p>
                    <p className="">27 Mei 2023</p>
                </div>
            </div>
            <hr className="border-2 border-stone-200" />
            <div className="grid gap-1">
                <div className="flex justify-between text-stone-600 text-sm border-b border-stone-300 px-2 py-2">
                    <p className=" grid-cols-1">username </p>
                    <p className=" font-semibold">@renoaderelyan</p>
                </div>
                <div className="flex justify-between text-stone-600 text-sm border-b border-stone-300 px-2 py-2">
                    <p className=" grid-cols-1">tanggal lahir</p>
                    <p className=" font-semibold">27 Mei 1997</p>
                </div>
                <div className="flex justify-between text-stone-600 text-sm border-b border-stone-300 px-2 py-2">
                    <p className="">No HP</p>
                    <p className="font-semibold">+628123456789</p>
                </div>
            </div>
            {/* END Text dibawah Foto */}
        </>
    );
}

export default AppProfile;
