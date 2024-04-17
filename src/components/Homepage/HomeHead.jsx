import { Link } from "react-router-dom";

function HomeHead() {
    return (
        <>
            {/* <div className="w-full"> */}
            <div className=" w-full px-6  md:px-20 py-12 flex-col justify-start items-center gap-6 inline-flex">
                <div className="max-w-2xl w-full  flex-col justify-start items-center gap-3 flex ">
                    <div className="self-stretch flex-col justify-start items-center gap-1 flex">
                        <div className="self-stretch text-center text-primary-600 text-lg font-bold leading-7">
                            Tahukah anda?
                        </div>
                        <div className="grid md:flex gap-4 center">
                            <div className="self-stretch text-center text-stone-900 text-8xl font-bold ">
                                66.2%
                            </div>
                            <div className="grid text-center md:text-left place-content-center self-stretch text-stone-700 text-2xl font-bold leading-8">
                                Orangtua Tidak Memperoleh Informasi Pengasuhan
                                Anak
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch text-center text-stone-500 text-base font-normal leading-normal">
                        Tahukah anda? Perjalanan mendidik anak tidak perlu
                        dilakukan sendirian. Manfaatkanlah fitur konsultasi kami
                        untuk mendapatkan bimbingan dan dukungan ahli dalam
                        membangun masa depan gemilang anak-anak Anda.
                    </div>
                    <div>
                        <Link
                            className="flex py-3 px-6 bg-primary-600 text-stone-50 rounded-md hover:bg-primary-700"
                            to="/konsultasi"
                        >
                            Konsultasi Sekarang
                        </Link>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    );
}

export default HomeHead;
