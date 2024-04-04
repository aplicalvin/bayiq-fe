import TestiCard from "../components/Konsultasi/TestiCard";
import TestimoniHead from "../components/Konsultasi/Testimoni/TestiHead";
import { Link } from "react-router-dom";

function Testimoni() {
    return (
        <>
            <div>
                <TestimoniHead />
                <div className="w-fit mx-auto gap-4  grid lg:grid-cols-3 mb-12 ">
                    <TestiCard />
                    <TestiCard />
                    <TestiCard />
                    <TestiCard />
                    <TestiCard />
                    <TestiCard />
                    <TestiCard />
                    <TestiCard />
                    <TestiCard />
                    <TestiCard />
                    <TestiCard />
                    <TestiCard />
                    <TestiCard />
                    <TestiCard />
                    <TestiCard />
                    <TestiCard />
                    <TestiCard />
                    <TestiCard />
                    <TestiCard />
                    <TestiCard />
                </div>
                <div className="grid   gap-4 w-fit mx-auto mb-12">
                    <h1 className=" text-2xl font-semibold text-stone-700">
                        Sudah yakin untuk berkonsultasi?
                    </h1>
                    <div className="px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-xl justify-center items-center inline-flex max-w-72 place-self-center">
                        <Link
                            to={"/pilihsesi"}
                            className="text-stone-50 text-lg font-normal leading-7"
                        >
                            Daftar Konsultasi
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Testimoni;
