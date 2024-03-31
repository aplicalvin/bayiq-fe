function TestiCard() {
    return (
        <>
            <div className="w-80 h-48 px-6 py-3 bg-stone-50 rounded-3xl border border-neutral-300 flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start flex">
                    <div className="self-stretch grow shrink basis-0 text-neutral-500 text-sm font-normal leading-tight">
                        Berkonsultasi dengan mentor dapat membantu aku dan suami
                        agar lebih siap untuk memiliki anak. Semoga kamu jadi
                        anak sholeh ya nak.
                    </div>
                </div>
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                    <img
                        className="w-9 h-9 p-1 rounded-full border border-neutral-500"
                        src="https://via.placeholder.com/36x36"
                    />
                    <div className="grow shrink basis-0 flex-col justify-center items-start inline-flex">
                        <div className="self-stretch text-neutral-500 text-xs font-bold leading-none">
                            Flora Shafiqa Riyadi
                        </div>
                        <div className="self-stretch text-neutral-500 text-xs font-normal leading-none">
                            28 Tahun
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TestiCard;
