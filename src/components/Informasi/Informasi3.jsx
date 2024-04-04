import CardBidan from "./CardBidan";

function Informasi3() {
    return (
        <>
            <div className="flex justify-center w-full h-fit  place-self-center">
                <div className="max-w-[1440px] w-fit md:w-full px-6 md:px-20 py-12 justify-between grid gap-6">
                    <h1 className="font-bold text-xl text-stone-800">
                        Bidan terdekat dari rumah Anda
                    </h1>
                    <div className="self-stretch justify-start items-start gap-6 grid md:grid-cols-3 lg:grid-cols-4">
                        <CardBidan />
                        <CardBidan />
                        <CardBidan />
                        <CardBidan />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Informasi3;
