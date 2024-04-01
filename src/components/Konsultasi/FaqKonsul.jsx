import { Accordion } from "flowbite-react";

function FaqKonsul() {
    return (
        <>
            <div className="flex w-full max-w-7xl">
                <Accordion collapseAll>
                    <Accordion.Panel>
                        <Accordion.Title>
                            Apakah konsultasi ini tersedia untuk semua orang
                            tua?
                        </Accordion.Title>
                        <Accordion.Content className="cekbang">
                            <p className=" mb-2 text-gray-500 dark:text-gray-400">
                                Ya, konsultasi kami tersedia untuk semua orang
                                tua yang memerlukan bantuan dan nasihat tentang
                                perawatan bayi dan perkembangan anak. Kami siap
                                membantu dengan berbagai pertanyaan dan
                                kekhawatiran yang Anda miliki.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            Apa yang dapat saya harapkan dari sesi konsultasi
                            dengan ahli kesehatan anak?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Sesi konsultasi dengan ahli kesehatan anak akan
                                memberikan Anda kesempatan untuk mendiskusikan
                                kekhawatiran atau pertanyaan Anda tentang
                                kesehatan dan perkembangan anak Anda. Ahli kami
                                akan memberikan informasi yang akurat, saran
                                praktis, dan dukungan emosional sesuai dengan
                                kebutuhan Anda.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            Apakah konsultasi tersedia secara online atau
                            offline?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Saat ini, kami menyediakan konsultasi secara
                                daring (online) melalui platform kami. Anda
                                dapat terhubung dengan ahli kesehatan anak kami
                                melalui obrolan video atau pesan teks,
                                memberikan kenyamanan dan aksesibilitas
                                tambahan.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            Bagaimana keamanan data dan privasi saya dijamin
                            selama sesi konsultasi?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Keamanan data dan privasi Anda adalah prioritas
                                utama kami. Kami menggunakan teknologi enkripsi
                                yang kuat untuk melindungi informasi pribadi
                                Anda selama sesi konsultasi. Semua percakapan
                                dijaga kerahasiaannya dan hanya diakses oleh
                                Anda dan ahli kesehatan anak yang bersangkutan.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
        </>
    );
}

export default FaqKonsul;
