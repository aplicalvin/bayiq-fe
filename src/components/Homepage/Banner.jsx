import { Banner } from "flowbite-react";
import { HiArrowRight, HiX } from "react-icons/hi";
import { MdPercent } from "react-icons/md";
import { Link } from "react-router-dom";

function HomeBanner() {
    return (
        <>
            <Banner>
                <div className="flex w-full justify-between border-t border-gray-200 bg-primary-500 py-3">
                    <div className="mx-auto flex items-center pl-6">
                        <p className="flex items-center text-sm font-normal text-gray-500 ">
                            <span className="flex gap-3 text-xs md:text-base text-stone-100 place-items-center">
                                Anda orang tua baru yang perlu panduan?
                                <Link
                                    to="/roadmap"
                                    className="ml-0 flex items-center text-xs md:text-base font-medium bg-primary-700 text-stone-100 hover:bg-primary-800 md:ml-1 md:inline-flex py-1 px-3 rounded-md"
                                >
                                    Mulai dari sini
                                </Link>
                            </span>
                        </p>
                    </div>
                    <Banner.CollapseButton
                        color="gray"
                        className="border-0 bg-transparent text-stone-100"
                    >
                        <HiX className="h-4 w-4" />
                    </Banner.CollapseButton>
                </div>
            </Banner>
        </>
    );
}

export default HomeBanner;
