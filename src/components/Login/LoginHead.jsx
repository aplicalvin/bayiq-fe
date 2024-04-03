import Image1 from "../../assets/assets/image/image1.jpg";
import LoginForm from "./LoginForm";

function LoginHead() {
    return (
        <>
            {/* <div className="w-full"> */}
            <div className="w-full mx-auto justify-start items-center grid md:inline-flex">
                {/* form awal */}
                <div className=" grid gap-4 w-full px-6 md:px-20 pb-12">
                    <div className=" max-w-2xl w-full my-4 mx-auto flex-col justify-start items-center gap-2 flex ">
                        <div className="self-stretch  flex-col justify-start items-center gap-1 flex">
                            <div className=" self-stretch text-center text-primary-600 text-lg font-bold leading-7">
                                Masuk
                            </div>
                            <div className="self-stretch text-center text-stone-900 text-3xl font-bold leading-10">
                                Selamat datang kembali
                            </div>
                        </div>
                        <div className="self-stretch text-center text-stone-500 text-base font-normal leading-normal">
                            Tersesat dalam persiapan menyambut kelahiran si
                            kecil? Jangan biarkan kekhawatiran membebani Anda.
                            Ayo konsultasikan dengan para ahli!
                        </div>
                    </div>
                    <div>
                        <LoginForm />
                    </div>
                </div>
                <div className="w-full h-full ">
                    <img
                        src={Image1}
                        className="w-full h-full object-cover"
                        alt=""
                    />
                </div>
            </div>
            {/* </div> */}
        </>
    );
}

export default LoginHead;
