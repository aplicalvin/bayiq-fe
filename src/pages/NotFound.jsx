import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <div className="grid w-full h-screen mx-auto justify-center items-center bg-primary-100">
                <div className=" grid gap-4">
                    <div className=" justify-center  grid gap-2">
                        <h1 className="text-9xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-br from-primary-900 via-primary-600 to-primary-800">
                            404
                        </h1>
                        <h1 className=" text-center text-2xl">Not Found</h1>
                    </div>
                    <div className="flex gap-1 text-sm text-center place-content-center">
                        <p>Kembali ke </p>
                        <Link to="/" className="text-blue-700">
                            Halaman Utama
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NotFound;
