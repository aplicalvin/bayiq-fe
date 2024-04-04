import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom
import {
    Button,
    Checkbox,
    Label,
    TextInput,
    Select,
    Datepicker,
} from "flowbite-react";

function KonsulForm() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return (
        <>
            <div className="">
                <form className="mx-auto w-full flex max-w-md flex-col gap-6 active:border-primary-500">
                    <div className="max-w-md">
                        <div className="mb-2  block">
                            <Label
                                htmlFor="jeniskonsulny"
                                className="text-stone-600"
                                value="Jenis Konsultasi"
                            />
                        </div>
                        <Select
                            className="bg-white"
                            id="jeniskonsulny"
                            required
                        >
                            <option>Konsultasi A</option>
                            <option>Konsultasi B</option>
                            <option>Konsultasi C</option>
                            <option>Konsultasi D</option>
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="tglkonsul"
                                className="text-stone-600"
                                value="Tanggal Konsultasi"
                            />
                        </div>
                        <Datepicker
                            id="tglkonsul"
                            minDate={tomorrow}
                            required
                        />
                    </div>

                    <Button
                        type="submit"
                        // onClick={handleButtonClick}
                        className="bg-primary-600 hover:bg-primary-700"
                    >
                        Lanjutkan
                    </Button>
                    <div className="grid">
                        <p>
                            for developer, hbs button atas di klik, ntr set biar
                            ke redirect ke pages ini ya
                        </p>
                        <Link to="/pilihsesi" className="text-blue-800">
                            Nah, klik ini
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default KonsulForm;
