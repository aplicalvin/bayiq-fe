import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { Badge } from "flowbite-react";
import Image1 from "../../assets/assets/image/image1.jpg";
import { FaStar } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";

// import Image from "next/image";

function CardDokter() {
    return (
        <>
            <Link to={"/detaildokter"}>
                <div className="w-72 rounded-3xl border border-stone-300 flex-col justify-start items-start inline-flex bg-stone-50">
                    <div className="h-48 w-full relative bg-rose-50">
                        <img
                            src={Image1}
                            className="h-48 object-cover w-full  relative rounded-t-3xl"
                            alt=""
                        />
                    </div>
                    <div className="self-stretch  px-6 pt-3 pb-6 flex-col justify-start items-start flex gap-3">
                        <div className="grid gap-3">
                            <div className="grid gap-1">
                                <h1 className="text-xl font-semibold text-stone-800">
                                    dr. Michelle Alexander
                                </h1>
                                <p className="text-sm text-stone-500">
                                    Dokter Spesialis Anak
                                </p>
                                <div className="flex gap-4">
                                    <div className=" flex gap-2 items-center">
                                        <FaStar className="text-yellow-400" />
                                        <p className="text-sm font-semibold text-stone-700">
                                            4,9
                                        </p>
                                    </div>
                                    <div className=" flex gap-2 items-center">
                                        <MdWorkHistory />
                                        <p className="text-sm font-semibold text-stone-700">
                                            10 Tahun
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default CardDokter;
