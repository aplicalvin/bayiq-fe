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
            <div className="grid gap-1 text-center mt-16 py-2 mx-auto border">
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
                    <p>Bergabung sejak </p>
                    <p>27 Mei 2023</p>
                </div>
            </div>
            {/* END Text dibawah Foto */}
        </>
    );
}

export default AppProfile;
