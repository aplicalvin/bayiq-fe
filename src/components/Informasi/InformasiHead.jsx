import { Label, TextInput, Button } from "flowbite-react";
import { BiSearch } from "react-icons/bi";

function InformasiHead() {
    return (
        <>
            <div className=" w-full px-6  md:px-20 py-12 flex-col justify-start items-center gap-6 inline-flex">
                <div className="max-w-2xl w-full  flex-col justify-start items-center gap-3 flex ">
                    <div className="self-stretch flex-col justify-start items-center gap-1 flex">
                        <div className="self-stretch text-center text-primary-600 text-lg font-bold leading-7">
                            Informasi
                        </div>
                        <div className="self-stretch text-center text-stone-900 text-4xl font-bold leading-10">
                            Temukan Layanan Kesehatan Terbaik di Dekat Anda!
                        </div>
                    </div>
                    <div className="self-stretch text-center text-stone-500 text-base font-normal leading-normal">
                        Akses Cepat ke Dokter, Bidan, dan Rumah Sakit Terdekat
                        dengan Teknologi GPS Kami yang Mudah Digunakan.
                    </div>
                </div>
                <div className="flex h-fit">
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
                    <Button className="bg-primary-700 hover:bg-primary-800  h-fit self-center">
                        Aktifkan GPS
                    </Button>
                </div>
                {/* Search Button End */}
            </div>
        </>
    );
}

export default InformasiHead;
