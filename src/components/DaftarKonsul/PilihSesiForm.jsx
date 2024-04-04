import React, { useState } from "react";
import { Label, Select, Datepicker, Button } from "flowbite-react";

function PilihSesiForm() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    return (
        <div className="w-screen">
            <form className=" mx-auto w-fit px-4 py-2 gap-6 grid md:flex  active:border-primary-500">
                <div className="min-w-72">
                    <div className="mb-1  block">
                        <Label
                            htmlFor="jeniskonsulny"
                            className="text-stone-600"
                            value="Jenis Konsultasi"
                        />
                    </div>
                    <Select id="jeniskonsulny" required>
                        <option>Konsultasi A</option>
                        <option>Konsultasi B</option>
                        <option>Konsultasi C</option>
                        <option>Konsultasi D</option>
                    </Select>
                </div>
                <div className="min-w-72">
                    <div className="mb-1 block">
                        <Label
                            htmlFor="tglkonsul"
                            className="text-stone-600"
                            value="Tanggal Konsultasi"
                        />
                    </div>
                    <Datepicker id="tglkonsul" minDate={tomorrow} required />
                </div>
                {/* filter harga */}
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="countries"
                            value="Pilih Rentang Harga"
                        />
                    </div>
                    <div className="flex gap-2 ">
                        <Select id="min" required>
                            <option>Rp. 50.000</option>
                            <option>Rp. 100.000</option>
                            <option>Rp. 150.000</option>
                            <option>Rp. 200.000</option>
                        </Select>
                        <p className="self-center">sd.</p>
                        <Select id="max" required>
                            <option>Rp. 99.000</option>
                            <option>Rp. 149.000</option>
                            <option>Rp. 199.000</option>
                            <option>seterusnya</option>
                        </Select>
                    </div>
                </div>
                <Button
                    type="submit"
                    className="bg-primary-600 hover:bg-primary-700 h-fit self-end px-6 text-stone-50"
                >
                    Filter
                </Button>
            </form>
        </div>
    );
}

export default PilihSesiForm;
