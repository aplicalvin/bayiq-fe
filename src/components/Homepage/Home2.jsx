import ImgHome2 from "../../assets/assets/image/Home2.png";

function Home2() {
    return (
        <>
            <div className="bg-primary-50">
                <div className="grid md:flex gap-12 items-center max-w-screen-xl w-fit mx-12 md:mx-auto  my-12">
                    {/* text */}
                    <div className="max-w-2xl w-full grid gap-3 h-fit order-2 md:order-1">
                        <h1 className="text-3xl font-bold text-stone-900">
                            Menjadi orang tua adalah perjalanan yang penuh
                            tantangan.{" "}
                        </h1>
                        <p className="text-lg font-normal text-stone-700">
                            Dari kegembiraan melihat senyum pertama hingga
                            kekhawatiran tentang apakah kita melakukan yang
                            terbaik untuk anak kita, setiap langkah penuh dengan
                            kebingungan dan ketidakpastian.
                        </p>
                        <p className="text-lg font-normal text-stone-700">
                            Sebagai orang tua, peran Anda sangat penting dalam
                            membentuk masa depan anak-anak Anda. Setiap
                            keputusan, setiap tindakan, merupakan investasi
                            dalam kehidupan mereka yang akan datang.
                        </p>
                        <p className="text-lg font-normal text-stone-700">
                            Mari bersama-sama membangun fondasi yang kokoh,
                            langkah demi langkah, menuju masa depan yang cerah
                            bagi generasi mendatang.
                        </p>
                    </div>

                    {/* image */}
                    <div className="mx-auto md:mx-0 md:order-2">
                        <img src={ImgHome2} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home2;
