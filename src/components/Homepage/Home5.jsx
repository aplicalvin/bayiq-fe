import ImgHome5 from "../../assets/assets/image/Home5.png";
import { Link } from "react-router-dom";

function Home5() {
    return (
        <>
            <div className="bg-primary-50">
                <div className="grid gap-0 items-center max-w-screen-xl w-fit mx-12 md:mx-auto  mt-12">
                    {/* text */}
                    <div className="max-w-4xl mx-auto w-full grid gap-3 h-fit order-1 ">
                        <p className="text-3xl text-center font-bold text-primary-800">
                            Langkah kecil di masa batita menghasilkan jejak
                            besar di masa depan. Bergabunglah dengan kami untuk
                            memberikan fondasi yang kokoh bagi generasi
                            mendatang. Mari kita wujudkan masa depan gemilang
                            bersama!
                        </p>
                    </div>

                    {/* image */}
                    <div className="mx-auto md:mx-0 order-2">
                        <img src={ImgHome5} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home5;
