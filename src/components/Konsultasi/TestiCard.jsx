function TestiCard() {
    return (
        <>
            <div className="w-80 h-48 px-6 py-3 bg-stone-50 rounded-3xl border border-stone-300 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start flex">
                    <div className="self-stretch grow shrink basis-0 text-stone-500 text-sm font-normal leading-tight">
                        Berkonsultasi dengan mentor dapat membantu aku dan suami
                        agar lebih siap untuk memiliki anak. Semoga kamu jadi
                        anak sholeh ya nak.
                    </div>
                </div>
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                    {/* foto user */}
                    <img
                        className="w-9 h-9 p-1 object-cover rounded-full border border-stone-500"
                        src="https://pbs.twimg.com/media/GJmpYpNaEAAK4o1?format=jpg"
                    />
                    <div className="grow shrink basis-0 flex-col justify-center items-start inline-flex">
                        <div className="self-stretch text-stone-800 text-xs font-bold">
                            Flora Shafiqa Riyadi
                        </div>
                        <div className="self-stretch text-stone-500 text-xs font-normal ">
                            28 Tahun
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TestiCard;
