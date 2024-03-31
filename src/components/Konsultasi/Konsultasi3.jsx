import JenisKonsultasi from "./JenisKonsultasi";

function Konsultasi3() {
    return (
        <>
            <div className="flex justify-center w-full h-fit  place-self-center">
                <div className="max-w-[1440px] w-fit lg:w-full px-6 md:px-20 py-12 justify-between grid gap-6">
                    <div className=" flex-col justify-start items-center gap-2 flex">
                        <div className="self-stretch flex-col justify-start items-center gap-1 flex">
                            <div className="self-stretch text-neutral-900 text-2xl font-bold leading-loose">
                                Jenis Jenis Konsultasi
                            </div>
                        </div>
                        <div className="self-stretch text-neutral-500 text-base font-normal leading-normal">
                            Beberapa layanan konsultasi yang dapat anda ambil{" "}
                        </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-6 grid md:grid-cols-2 lg:grid-cols-3">
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
