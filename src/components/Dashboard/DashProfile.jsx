import Image1 from "../../assets/assets/image/image1.jpg";
import { FileInput, Label } from "flowbite-react";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

function DashProfile() {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <div className="grid gap-4">
                <h1 className="text-xl font-semibold text-stone-700">
                    Profile
                </h1>

                <div className="grid md:flex gap-8">
                    {/* Change Profile Photo */}
                    <div className="grid gap-2 border border-stone-300 px-2 py-4 relative bg-rose-50 mx-auto md:mx-0 rounded-2xl">
                        <img
                            src={Image1}
                            className="h-64 w-64  object-cover   relative rounded-3xl mx-auto"
                            alt=""
                        />
                        <form action="POST">
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="file-upload"
                                        value="Pilih foto"
                                    />
                                </div>
                                <FileInput id="file-upload" />
                            </div>
                        </form>
                    </div>
                    {/* Change Profile Photo */}
                    {/* Profil lainnya */}
                    <div className="grid gap-2 w-full border border-stone-300  p-4 relative bg-rose-50 mx-auto md:mx-0 rounded-2xl ">
                        <div className="grid gap-3 h-fit">
                            <h1 className="text-xl font-semibold text-stone-800">
                                Identitas
                            </h1>
                            <div className="grid h-fit gap-2 md:gap-3">
                                <div className="flex w-fit h-fit gap-2 text-sm">
                                    <p className="w-20 md:w-32 text-stone-700">
                                        Username
                                    </p>
                                    <p className="w-80 font-semibold text-stone-800">
                                        jkt48.michie
                                    </p>
                                </div>
                                <div className="flex w-fit h-fit gap-2 text-sm">
                                    <p className="w-20 md:w-32 text-stone-700">
                                        Nama
                                    </p>
                                    <p className="w-80 font-semibold text-stone-800">
                                        Michelle Alexander
                                    </p>
                                </div>
                                <div className="flex w-fit h-fit gap-2 text-sm">
                                    <p className="w-20 md:w-32 text-stone-700">
                                        Email
                                    </p>
                                    <p className="w-80 font-semibold text-stone-800">
                                        michie.gen11@member.jkt48.com
                                    </p>
                                </div>
                                <div className="flex w-fit h-fit gap-2 text-sm">
                                    <p className="w-20 md:w-32 text-stone-700">
                                        No Telpon
                                    </p>
                                    <p className="w-80 font-semibold text-stone-800">
                                        0812345678910
                                    </p>
                                </div>
                            </div>
                            <div className="grid h-fit gap-2 md:gap-3">
                                <Button
                                    onClick={() => setOpenModal(true)}
                                    className="bg-red-700 max-w-xs"
                                >
                                    Logout
                                </Button>
                                <Modal
                                    show={openModal}
                                    size="md"
                                    onClose={() => setOpenModal(false)}
                                    popup
                                >
                                    <Modal.Header />
                                    <Modal.Body>
                                        <div className="text-center">
                                            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                                Apakah anda yakin ingin keluar?
                                            </h3>
                                            <div className="flex justify-center gap-4">
                                                <Button
                                                    color="failure"
                                                    onClick={() =>
                                                        setOpenModal(false)
                                                    }
                                                >
                                                    {"Ya, saya Yakin"}
                                                </Button>
                                                <Button
                                                    color="gray"
                                                    onClick={() =>
                                                        setOpenModal(false)
                                                    }
                                                >
                                                    Tidak, Kembali
                                                </Button>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashProfile;
