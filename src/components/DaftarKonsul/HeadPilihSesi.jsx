import FilterKonsul from "./FilterKonsul";
import PilihSesiForm from "./PilihSesiForm";

function HeadPilihSesi() {
    return (
        <>
            <div className="w-full mx-auto justify-start items-center grid">
                <div className="max-w-2xl mx-auto py-4 w-full  flex-col justify-start items-center gap-3 flex ">
                    <div className="self-stretch flex-col justify-start items-center gap-1 flex">
                        <div className="self-stretch text-center text-primary-600 text-lg font-bold leading-7">
                            Pilih Sesi
                        </div>
                        <div className="self-stretch text-center text-stone-900 text-4xl font-bold leading-10">
                            Pilih Jadwal Konsultasi
                        </div>
                    </div>
                    <div className="self-stretch text-center text-stone-500 text-base font-normal leading-normal mx-4">
                        Pilhlah jadwal, dokter yang sesuai dengan harga anda
                    </div>
                </div>
                <PilihSesiForm />
                <FilterKonsul />
            </div>
        </>
    );
}

export default HeadPilihSesi;
