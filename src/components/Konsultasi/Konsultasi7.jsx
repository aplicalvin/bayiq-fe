import { Link } from "react-router-dom";

function Konsultasi7() {
    return (
        <>
            <div className=" w-full  px-6 md:px-20 py-12 flex-col justify-start items-center gap-6 bg-primary-300 inline-flex">
                <div className="max-w-2xl w-full  flex-col justify-start items-center gap-3 flex ">
                    <div className="self-stretch flex-col justify-start items-center gap-1 flex">
                        <div className="self-stretch text-center text-primary-600 text-lg font-bold leading-7">
                            Anda bingung?
                        </div>
                        <div className="self-stretch text-center text-primary-600 text-4xl font-bold leading-10">
                            Jangan biarkan! Konsultasikan dengan ahlinya demi
                            kebaikan si buah hati!
                        </div>
                    </div>
                </div>
                <Link
                    to={"/pilihsesi"}
                    className="px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-xl justify-center items-center inline-flex text-stone-50 text-lg font-normal leading-7"
                >
                    Daftar Konsultasi
                </Link>
            </div>
            {/* </div> */}
        </>
    );
}

export default Konsultasi7;
