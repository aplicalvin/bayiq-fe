import Pattern2 from "../../assets/assets/image/pattern2.png";
import SignUpForm from "./SignUpForm";

function LoginHead() {
    return (
        <>
            {/* <div className="w-full"> */}
            <div className="w-full h-full min-h-fit  mx-auto justify-start items-center grid lg:flex ">
                {/* form awal */}
                <div className="grid gap-4 w-full px-6 md:px-20 py-12  h-fit bg-stone-100">
                    <div className=" max-w-2xl w-full mx-auto flex-col justify-start items-center gap-2 flex ">
                        <div className="self-stretch  flex-col justify-start items-center gap-1 flex">
                            <div className=" self-stretch text-center text-primary-600 text-lg font-bold leading-7">
                                Buat Akun
                            </div>
                            <div className="self-stretch text-center text-stone-900 text-3xl font-bold leading-10">
                                Waktunya anda membuktikan
                            </div>
                        </div>
                        <div className="self-stretch text-center text-stone-500 text-base font-normal leading-normal">
                            Tersesat dalam persiapan menyambut kelahiran si
                            kecil? Jangan biarkan kekhawatiran membebani Anda.
                            Bergabunglah dengan kami dan dapatkan bimbingan
                            langsung dari para ahli!
                        </div>
                    </div>
                    <div>
                        <SignUpForm />
                    </div>
                </div>
                <div className="w-full h-full lg:min-h-screen object-cover">
                    <img
                        src={Pattern2}
                        className="w-full h-full lg:min-h-screen object-cover"
                        alt=""
                    />
                </div>
            </div>
            {/* </div> */}
        </>
    );
}

export default LoginHead;
