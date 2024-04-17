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
                        <div className="grid gap-4 center">
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
                        Dari kegembiraan hingga kekhawatiran, kami memahami
                        perasaan Anda sebagai orang tua. Dengan layanan
                        konsultasi kami, Anda tidak pernah merasa sendiri dalam
                        perjalanan mengurus si kecil.
                    </div>
                    <div className="self-stretch text-center text-stone-500 text-base font-normal leading-normal">
                        Sebagai Orang Tua, Kita Berperan Penting dalam membentuk
                        masa depan anak-anak kita, setiap langkah yang kita
                        ambil menjadi investasi berharga. Mari bergabung dalam
                        perjalanan ini bersama-sama.
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    );
}

export default HomeHead;
