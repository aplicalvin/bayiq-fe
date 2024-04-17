import { Link } from "react-router-dom";
import { Badge } from "flowbite-react";
import Image1 from "../../../assets/assets/image/image1.jpg";

function DetailEduMain() {
    return (
        <>
            <div className="my-12 max-w-5xl mx-6 md:mx-auto">
                <div className="h-96 w-full relative bg-rose-50">
                    <img
                        src={Image1}
                        className="h-96 object-cover max-w-4xl w-full mx-auto  relative rounded-3xl"
                        alt=""
                    />
                </div>
                <div className="self-stretch  px-6  p-6 flex-col justify-start items-start flex gap-3">
                    {/* Badge */}
                    <div className="flex flex-wrap gap-2 text-base">
                        <Badge className="bg-stone-100 border-stone-300 border text-stone-600">
                            Mental Anak
                        </Badge>
                        <Badge className="bg-stone-100 border-stone-300 border text-stone-600">
                            Parenting
                        </Badge>
                    </div>
                    <div className="grid gap-2">
                        <div className="self-stretch text-stone-700 text-3xl font-bold leading-7">
                            Ini dia, tips agar ibu tetap sehat selama mengurus
                            si kecil
                        </div>
                        <br />
                        <div className="self-stretch text-stone-500 text-base font-normal  leading-normal">
                            Menjadi seorang ibu adalah tugas yang mulia, namun
                            juga mengharuskan Anda untuk merawat diri sendiri
                            dengan baik agar dapat merawat buah hati Anda dengan
                            optimal. Seiring dengan kesibukan mengurus si kecil,
                            seringkali ibu mengabaikan kesehatan mereka sendiri.
                            Namun, menjaga kesehatan ibu adalah kunci utama
                            untuk memberikan perawatan yang baik kepada anak.
                            Berikut adalah beberapa tips yang dapat membantu ibu
                            tetap sehat selama mengurus si kecil:
                        </div>
                        <div className="self-stretch text-stone-500 text-base font-normal  leading-normal">
                            <br />
                            <span className="font-bold text-xl text-stone-700">
                                1. Prioritaskan Istirahat
                            </span>
                            <br />
                            Istirahat yang cukup sangat penting untuk menjaga
                            kesehatan ibu. Meskipun seringkali sulit untuk
                            menemukan waktu luang, cobalah untuk tidur sesuai
                            kebutuhan Anda dan manfaatkan waktu tidur si kecil
                            untuk beristirahat sejenak.
                        </div>
                        <div className="self-stretch text-stone-500 text-base font-normal  leading-normal">
                            <br />
                            <span className="font-bold text-xl text-stone-700">
                                2. Nutrisi Seimbang
                            </span>
                            <br />
                            Asupan makanan yang sehat dan seimbang sangat
                            penting untuk menjaga kesehatan ibu. Pastikan untuk
                            mengonsumsi makanan yang kaya akan nutrisi seperti
                            buah, sayuran, protein, dan biji-bijian. Jangan lupa
                            untuk minum air putih yang cukup juga, karena
                            hidrasi yang baik sangat penting.
                        </div>
                        <div className="self-stretch text-stone-500 text-base font-normal  leading-normal">
                            <br />
                            <span className="font-bold text-xl text-stone-700">
                                3. Tetap Aktif
                            </span>
                            <br />
                            Meskipun waktu luang mungkin terbatas, tetaplah
                            aktif secara fisik sesuai kemampuan Anda.
                            Berjalan-jalan ringan atau melakukan latihan
                            peregangan dapat membantu menjaga kesehatan fisik
                            dan juga membantu mengurangi stres.
                        </div>
                        <div className="self-stretch text-stone-500 text-base font-normal  leading-normal">
                            <br />
                            <span className="font-bold text-xl text-stone-700">
                                4. Jangan Ragu untuk Meminta Bantuan{" "}
                            </span>
                            <br />
                            Jangan ragu untuk meminta bantuan dari pasangan,
                            keluarga, atau teman-teman. Dukungan sosial sangat
                            penting dan memungkinkan Anda untuk mengambil waktu
                            istirahat yang diperlukan.
                        </div>
                        <div className="self-stretch text-stone-500 text-base font-normal  leading-normal">
                            <br />
                            <span className="font-bold text-xl text-stone-700">
                                5. Kelola Stres dengan Baik{" "}
                            </span>
                            <br />
                            Menjadi seorang ibu dapat menyebabkan tingkat stres
                            yang tinggi. Temukan cara untuk mengelola stres
                            seperti meditasi, yoga, atau hobi yang menyenangkan.
                            Jangan ragu untuk berkonsultasi dengan ahli jika
                            stres terasa terlalu berat.
                        </div>
                        <div className="self-stretch text-stone-500 text-base font-normal  leading-normal">
                            <br />
                            <span className="font-bold text-xl text-stone-700">
                                6. Jaga Keseimbangan Antara Waktu untuk Diri
                                Sendiri dan Waktu Bersama Si Kecil{" "}
                            </span>
                            <br />
                            Penting untuk memiliki waktu untuk diri sendiri
                            untuk menjaga keseimbangan dan memperbaharui energi
                            Anda. Namun, jangan lupa untuk memberikan perhatian
                            yang cukup kepada si kecil dan nikmati momen-momen
                            bersama.
                        </div>
                        <div className="self-stretch text-stone-500 text-base font-normal  leading-normal">
                            <br />
                            <span className="font-bold text-xl text-stone-700">
                                7. Perhatikan Kesehatan Mental Anda{" "}
                            </span>
                            <br />
                            Jangan abaikan kesehatan mental Anda. Jika Anda
                            merasa cemas, sedih, atau stres secara
                            terus-menerus, jangan ragu untuk mencari bantuan
                            dari profesional kesehatan mental.
                        </div>
                        <div className="self-stretch text-stone-500 text-base font-normal  leading-normal">
                            <br />
                            <span className="font-bold text-xl text-stone-700">
                                8. Periksa Kesehatan Secara Rutin
                            </span>
                            <br />
                            Jadwalkan kunjungan rutin ke dokter untuk memeriksa
                            kesehatan Anda. Ini penting untuk mendeteksi masalah
                            kesehatan sedini mungkin dan mendapatkan perawatan
                            yang diperlukan.
                        </div>
                        <div className="self-stretch text-stone-500 text-base font-normal  leading-normal">
                            Menjaga kesehatan ibu adalah kunci untuk memberikan
                            perawatan yang baik kepada si kecil. Dengan
                            mengutamakan kesehatan dan keseimbangan, Anda dapat
                            menjadi ibu yang kuat dan bahagia sambil merawat si
                            kecil dengan cinta dan perhatian yang tak terbatas.{" "}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailEduMain;
