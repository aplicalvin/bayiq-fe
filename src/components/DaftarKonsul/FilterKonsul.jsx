import CardSesi from "./CardSesi";

function FilterKonsul() {
    return (
        <>
            <div className="flex justify-center w-full h-fit  place-self-center bg-stone-100">
                <div className="max-w-[1440px] w-full px-6 md:px-20 py-12 grid gap-6">
                    <h1 className="text-stone-700">Menampilkan hasil filter</h1>
                    <div className="grid md:grid-cols-3 gap-6 w-full">
                        <CardSesi />
                        <CardSesi />
                        <CardSesi />
                        <CardSesi />
                        <CardSesi />
                        <CardSesi />
                    </div>
                </div>
            </div>
        </>
    );
}

export default FilterKonsul;
