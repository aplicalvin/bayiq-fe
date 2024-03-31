import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { Badge } from "flowbite-react";
// import Image from "next/image";

function CardArtEdu() {
    return (
        <>
            <Link to={"/login"}>
                <div className="w-full lg:w-96 rounded-3xl border border-neutral-300 flex-col justify-start items-start inline-flex bg-stone-50">
                    <div className="h-48 relative bg-rose-50"></div>
                    <div className="self-stretch lg:h-32 px-6 pt-3 pb-6 flex-col justify-start items-start flex gap-3">
                        {/* Badge */}
                        <div className="flex flex-wrap gap-2">
                            <Badge className="bg-stone-100 border-stone-300 border text-stone-600">
                                Default
                            </Badge>
                            <Badge className="bg-stone-100 border-stone-300 border text-stone-600">
                                Default
                            </Badge>
                        </div>
                        <div className="grid gap-2">
                            <div className="self-stretch text-neutral-700 text-xl font-bold  leading-7">
                                Konsultasi Pasutri Baru
                            </div>
                            <div className="self-stretch text-neutral-400 text-base font-normal  leading-normal">
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
