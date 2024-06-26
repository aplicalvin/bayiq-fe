// import Image1 from "../../assets/assets/image/image1.jpg";
function JenisKonsultasi() {
    return (
        <>
            <div className="w-full lg:w-96 rounded-3xl border border-stone-300 flex-col justify-start items-start inline-flex bg-stone-50">
                <div className="h-48 w-full relative bg-rose-50">
                    <img
                        src="https://pbs.twimg.com/media/FwC527BakAEvT2v?format=jpg"
                        className="h-48 object-cover w-full  relative rounded-t-3xl"
                        alt=""
                    />
                </div>
                <div className="self-stretch lg:h-32 px-6 pt-3 pb-6 flex-col justify-start items-start flex">
                    <div className="self-stretch text-stone-700 text-xl font-bold  leading-7">
                        Konsultasi Pasutri Baru
                    </div>
                    <div className="self-stretch text-stone-400 text-base font-normal  leading-normal">
                        Sebagai orang tua baru, tentu masih belum punya
                        pengalaman banyak dalam mengurus bayi. Konsultasikan
                        kepada ahlinya!
                    </div>
                </div>
            </div>
        </>
    );
}

export default JenisKonsultasi;
