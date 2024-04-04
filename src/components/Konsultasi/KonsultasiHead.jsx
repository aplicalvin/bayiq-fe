import { Link } from "react-router-dom";

function KonsultasiHead() {
    return (
        <>
            {/* <div className="w-full"> */}
            <div className=" w-full px-6  md:px-20 py-12 flex-col justify-start items-center gap-6 inline-flex">
                <div className="max-w-2xl w-full  flex-col justify-start items-center gap-3 flex ">
                    <div className="self-stretch flex-col justify-start items-center gap-1 flex">
                        <div className="self-stretch text-center text-primary-600 text-lg font-bold leading-7">
                            Konsultasi
                        </div>
                        <div className="self-stretch text-center text-stone-900 text-4xl font-bold leading-10">
                            Konsultasikan segala masalah anda dengan ahlinya!
                        </div>
                    </div>
                    <div className="self-stretch text-center text-stone-500 text-base font-normal leading-normal">
                        Tersesat dalam persiapan menyambut kelahiran si kecil?
                        Jangan biarkan kekhawatiran membebani Anda. Ayo
                        konsultasikan dengan para ahli!
                    </div>
                </div>
                <div className="px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-xl justify-center items-center inline-flex">
                    <Link
                        to={"/daftarkonsul"}
                        className="text-stone-50 text-lg font-normal leading-7"
                    >
                        Daftar Konsultasi
                    </Link>
                </div>
            </div>
            {/* </div> */}
        </>
    );
}

export default KonsultasiHead;
