import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { Badge } from "flowbite-react";
import Image1 from "../../assets/assets/image/image1.jpg";
// import Image from "next/image";

function CardArtEdu() {
    return (
        <>
            <Link to={"/article"}>
                <div className="w-full lg:w-96 rounded-3xl border border-stone-300 flex-col justify-start items-start inline-flex bg-stone-50">
                    <div className="h-48 w-full relative bg-rose-50">
                        <img
                            src={Image1}
                            className="h-48 object-cover w-full  relative rounded-t-3xl"
                            alt=""
                        />
                    </div>
                    <div className="self-stretch  px-6 pt-3 pb-6 flex-col justify-start items-start flex gap-3">
                        {/* Badge */}
                        <div className="flex flex-wrap gap-2">
                            <Badge className="bg-stone-100 border-stone-300 border text-stone-600">
                                Mental Anak
                            </Badge>
                            <Badge className="bg-stone-100 border-stone-300 border text-stone-600">
                                Parenting
                            </Badge>
                        </div>
                        <div className="grid gap-2">
                            <div className="self-stretch text-stone-700 text-xl font-bold leading-7">
                                Ini dia, tips agar ibu tetap sehat selama
                                mengurus si kecil
                            </div>
                            <div className="self-stretch text-stone-400 text-base font-normal  leading-normal">
                                Sebagai orang tua baru, tentu masih belum punya
                                pengalaman banyak di bidang ini. Jadi jangan
                                langsung
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default CardArtEdu;
