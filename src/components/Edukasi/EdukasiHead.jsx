import { Label, TextInput } from "flowbite-react";
import { BiSearch } from "react-icons/bi";

function EdukasiHead() {
    return (
        <>
            <div className=" w-full px-6  md:px-20 py-12 flex-col justify-start items-center gap-6 inline-flex">
                <div className="max-w-2xl w-full  flex-col justify-start items-center gap-3 flex ">
                    <div className="self-stretch flex-col justify-start items-center gap-1 flex">
                        <div className="self-stretch text-center text-primary-600 text-lg font-bold leading-7">
                            Edukasi
                        </div>
                        <div className="self-stretch text-center text-stone-900 text-4xl font-bold leading-10">
                            Ketahui apapun yang dibutuhkan untuk tumbuh dan
                            kembang si kecil!
                        </div>
                    </div>
                    <div className="self-stretch text-center text-stone-500 text-base font-normal leading-normal">
                        Tahukah anda, bahwa usia 0 - 3 merupakan usia rawan.
                        Karena mereka masih bergantung sama kamu ya bang. .jadi
                        tolonglah yang bener kalau ngurus anak!
                    </div>
                </div>
                {/* Search Button */}
                <div className="px-6 py-3 rounded-xl justify-center items-center inline-flex">
                    <div className="max-w-md">
                        <TextInput
                            id="email4"
                            type="email"
                            icon={BiSearch}
                            placeholder="Cari apapun, disini"
                            required
                        />
                    </div>
                </div>
                {/* Search Button End */}
            </div>
        </>
    );
}

export default EdukasiHead;
