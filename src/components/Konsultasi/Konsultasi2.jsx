function Konsultasi2() {
    return (
        <>
            <div className="flex justify-center w-full h-fit bg-primary-50  place-self-center">
                <div className="grid lg:inline-flex gap-16 max-w-[1440px] lg:w-full px-6 md:px-20 pt-12 justify-between">
                    <div className="w-full max-w-lg flex-col justify-start items-center gap-3 inline-flex">
                        <div className="self-stretch flex-col justify-start items-center gap-1 flex">
                            <div className="self-stretch text-stone-800 text-4xl font-bold leading-10">
                                Kenapa sih kita perlu konsultasi?
                            </div>
                        </div>
                        <div className=" self-stretch h-fit flex-col justify-start items-center gap-1 flex">
                            <div className=" self-stretch text-stone-500 text-base font-normal leading-normal">
                                Tanpa kamu sadari, beberapa hal ini perlu loh
                                untuk kita ketahui sebelum punya anak, seperti
                            </div>
                            <div className=" self-stretch ml-8">
                                <ul className="self-stretch text-stone-500 text-base font-normal leading-normal list-disc">
                                    <li>
                                        Mempersiapkan dana untuk Imunisasi ✅
                                    </li>
                                    <li>
                                        Mempersiapkan abcdefg untuk abcdefg ✅
                                    </li>
                                    <li>
                                        Mempersiapkan kebutuhan abcdefg selama 6
                                        bulan ✅
                                    </li>
                                    <li>
                                        Memberikan stimulus berupa abcdefg pada
                                        saat usia 000 ✅
                                    </li>
                                    <li>dan masih banyak lagi</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-lg  px-12 py-9 bg-primary-600 rounded-tl-3xl rounded-tr-3xl flex-col justify-start items-center gap-4 inline-flex">
                        <div className="self-stretch flex-col justify-start items-center gap-1 flex">
                            <div className="self-stretch text-stone-100 text-3xl font-bold leading-9">
                                Kami hadir untuk membantu memberikan solusi dari
                                permasalahan seperti,
                            </div>
                        </div>
                        <div className="self-stretch h-px border border-stone-300"></div>
                        <div className="self-stretch flex-col justify-start items-center gap-2 flex">
                            <div className="self-stretch text-stone-50 text-base font-normal leading-normal">
                                Kurangnya persiapan untuk jadwal Imunisasi si
                                kecil
                            </div>
                            <div className="self-stretch text-stone-50 text-base font-normal leading-normal">
                                Kebingungan memilih produk untuk si buah hati
                            </div>
                            <div className="self-stretch text-stone-50 text-base font-normal leading-normal">
                                Terjadinya fenomena{" "}
                                <i className="italic font-bold text-stone-50">
                                    baby blues
                                </i>
                            </div>
                            <div className="self-stretch text-stone-50 text-base font-normal leading-normal">
                                Si Kecil hobi main gadget sejak dini
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Konsultasi2;
