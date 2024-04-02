import Image1 from "../../assets/assets/image/image1.jpg";
import SignUpForm from "./SignUpForm";

function LoginHead() {
    return (
        <>
            {/* <div className="w-full"> */}
            <div className="w-full h-full min-h-fit  mx-auto justify-start items-center flex bg-primary-200">
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
                            Ayo konsultasikan dengan para ahli!
                        </div>
                    </div>
                    <div>
                        <SignUpForm />
                    </div>
                </div>
                <div className="w-full min-h-screen object-cover  ">
                    <img
                        src={Image1}
                        className="w-full h-full min-h-screen object-cover"
                        alt=""
                    />
                </div>
            </div>
            {/* </div> */}
        </>
    );
}

export default LoginHead;
