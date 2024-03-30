import JenisKonsultasi from "./JenisKonsultasi";

function Konsultasi3() {
    return (
        <>
            <div className="flex justify-center w-full h-fit  place-self-center cekbang">
                <div className="max-w-[1440px] w-full px-20 py-12 justify-between grid gap-6">
                    <div className="h-16 flex-col justify-start items-center gap-2 flex">
                        <div className="self-stretch h-8 flex-col justify-start items-center gap-1 flex">
                            <div className="self-stretch text-neutral-900 text-2xl font-bold font-['Plus Jakarta Sans'] leading-loose">
                                Jenis Jenis Konsultasi
                            </div>
                        </div>
                        <div className="self-stretch text-neutral-500 text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                            Beberapa layanan konsultasi yang dapat anda ambil{" "}
                        </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-6 grid grid-cols-3">
                        <JenisKonsultasi />
                        <JenisKonsultasi />
                        <JenisKonsultasi />
                        <JenisKonsultasi />
                        <JenisKonsultasi />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Konsultasi3;
