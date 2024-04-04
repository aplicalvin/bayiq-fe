import { Link } from "react-router-dom";

function TestimoniHead() {
    return (
        <>
            {/* <div className="w-full"> */}
            <div className=" w-full px-6  md:px-20 py-12 flex-col justify-start items-center gap-6 inline-flex">
                <div className="max-w-2xl w-full  flex-col justify-start items-center gap-3 flex ">
                    <div className="self-stretch flex-col justify-start items-center gap-1 flex">
                        <div className="self-stretch text-center text-primary-600 text-lg font-bold leading-7">
                            Testimoni
                        </div>
                        <div className="self-stretch text-center text-stone-900 text-4xl font-bold leading-10">
                            Jangan dengarkan kami, buktikan sendiri layanan
                            kami!
                        </div>
                    </div>
                    <div className="self-stretch text-center text-stone-500 text-base font-normal leading-normal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur, dolorum! Dolor dolorem et soluta, sed iusto
                        possimus iste voluptas eaque.
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    );
}

export default TestimoniHead;
