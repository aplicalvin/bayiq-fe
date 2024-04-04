import Image1 from "../../assets/assets/image/image1.jpg";
import KonsulForm from "./KonsulForm";

function HeadDaftarKonsul() {
    return (
        <>
            <div className="bg-[url(Image1)] w-full mx-auto justify-start items-center grid md:inline-flex bg-primary-200 bg-">
                {/* form awal */}
                <div className=" grid gap-4 w-fit rounded-3xl px-6 pb-12 mx-auto my-4 bg-stone-50/75">
                    <div className=" max-w-lg w-full my-4 mx-auto flex-col justify-start items-center gap-2 flex ">
                        <div className="self-stretch  flex-col justify-start items-center gap-1 flex">
                            <div className=" self-stretch text-center text-primary-600 text-lg font-bold leading-7">
                                Daftar Konsultasi
                            </div>
                            <div className="self-stretch text-center text-stone-900 text-3xl font-bold leading-10">
                                Mau konsultasi apa hari ini?
                            </div>
                        </div>
                        <div className="self-stretch text-center text-stone-500 text-base font-normal leading-normal">
                            Jangan biarkan anda semakin tersesat, karena Yamaha
                            semakin di depan. Waktunya anda untuk berkonsultasi
                            agar gacor saat bermain.
                        </div>
                    </div>
                    <div className="">
                        <KonsulForm />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeadDaftarKonsul;
