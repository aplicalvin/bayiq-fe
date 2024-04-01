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
                        <div className="flex gap-4 center">
                            <div className="self-stretch text-center text-stone-900 text-9xl font-bold ">
                                90%
                            </div>
                            <div className="grid place-content-center self-stretch text-stone-700 text-2xl font-bold leading-8">
                                Orang tua mengalami kesulitan dalam mengurus
                                bayi mereka
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch text-center text-stone-500 text-base font-normal leading-normal">
                        Masa batita merupakan masa emas, dimana tumbuh kembang
                        si kecil sangat dipengaruhi oleh masa ini. Oleh sebab
                        itu penting bagi orang tua untuk dapat lebih siap dalam
                        mempersiapkan segala kebutuhan si kecil.
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    );
}

export default HomeHead;
