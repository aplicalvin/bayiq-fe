function JenisKonsultasi() {
    return (
        <>
            <div className="w-72 lg:w-96 rounded-3xl border border-neutral-300 flex-col justify-start items-start inline-flex bg-stone-50">
                <div className="h-48 relative bg-rose-50"></div>
                <div className="self-stretch lg:h-32 px-6 pt-3 pb-6 flex-col justify-start items-start flex">
                    <div className="self-stretch text-neutral-700 text-xl font-bold font-['Plus Jakarta Sans'] leading-7">
                        Konsultasi Pasutri Baru
                    </div>
                    <div className="self-stretch text-neutral-400 text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                        Sebagai orang tua baru, tentu masih belum punya
                        pengalaman banyak di bidang ini. Jadi jangan langsung
                    </div>
                </div>
            </div>
        </>
    );
}

export default JenisKonsultasi;
