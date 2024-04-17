import ImgHome3 from "../../assets/assets/image/Home3.png";
import { Link } from "react-router-dom";

function Home3() {
    return (
        <>
            <div className="">
                <div className="grid md:flex gap-12 items-center max-w-screen-xl w-fit mx-12 md:mx-auto  my-12">
                    {/* text */}
                    <div className="max-w-2xl w-full grid gap-3 h-fit order-2 ">
                        <p className="text-lg font-normal text-stone-700">
                            Namun, di tengah semua itu, Anda tidak sendirian.
                            Kami hadir untuk membantu mengarahkan Anda melalui
                            lorong yang penuh dengan pertanyaan dan keraguan.
                        </p>
                        <p className="text-lg font-normal text-stone-700">
                            Dengan layanan konsultasi kami, Anda dapat yakin
                            bahwa ada seseorang yang mendengarkan, memahami, dan
                            memberikan dukungan saat Anda menjalani perjalanan
                            ini.
                        </p>
                        <div>
                            <Link
                                className="flex py-3 px-6 bg-primary-600 text-stone-50 rounded-md hover:bg-primary-700 items-center gap-3 w-fit"
                                to="/konsultasi"
                            >
                                Konsultasi Sekarang
                            </Link>
                        </div>
                    </div>

                    {/* image */}
                    <div className="mx-auto md:mx-0">
                        <img src={ImgHome3} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home3;
