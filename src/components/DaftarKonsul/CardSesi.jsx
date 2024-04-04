import { Card } from "flowbite-react";
import Image1 from "../../assets/assets/image/image1.jpg";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdWorkHistory } from "react-icons/md";

function CardSesi() {
    return (
        <>
            <div>
                <div className="grid border border-stone-400 rounded-2xl bg-stone-50 p-4 gap-3 w-full max-w-sm">
                    <div className="flex justify-between ">
                        <div className="">
                            <h5 className=" text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                Sesi 4
                            </h5>
                            <p className="text-sm  font-normal text-gray-700 dark:text-gray-400">
                                Konsultasi Psikologi Anak Balita
                            </p>
                        </div>
                        <div className=" flex font-extrabold text-xl text-stone-700">
                            <p>Rp.</p>
                            <p>200.000</p>
                        </div>
                    </div>

                    {/* data dokter */}

                    <div className="flex p-2 border border-stone-400 rounded-3xl gap-4">
                        <img
                            src={Image1}
                            className="w-20 h-28 object-cover rounded-2xl"
                            alt=""
                        />
                        <div>
                            <h1 className="text-base md:text-xl font-semibold text-stone-800">
                                dr. Michelle Alexandra
                            </h1>
                            <p className="text-sm text-stone-500">
                                Dokter Anak di RS. Ketileng
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
                    {/* END - data dokter */}

                    <div className="flex text-sm text-stone-700 justify-between">
                        <p>Jumat, 5 April 2024</p>
                        <p>10.00 - 11.00</p>
                    </div>

                    {/* button */}
                    <Link
                        to={"/pilihsesi/konfirmasi"}
                        className="bg-primary-700 text-stone-100 font-semibold text-center py-2 rounded-xl hover:bg-primary-800  my-2"
                    >
                        Jadwalkan
                    </Link>
                </div>
            </div>
        </>
    );
}

export default CardSesi;
