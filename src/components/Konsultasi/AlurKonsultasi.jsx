import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

function AlurKonsul() {
    return (
        <>
            <div>
                <Timeline.Item className=" px-4">
                    <Timeline.Point
                        icon={HiCalendar}
                        className="text-primary-700 bg-primary-100"
                    />
                    <Timeline.Content>
                        <Timeline.Time>Langkah 1</Timeline.Time>
                        <div className="grid gap-2">
                            <Timeline.Title className="text-lg font-bold text-stone-800 leading-6">
                                Memilih Jenis Konsultasi
                            </Timeline.Title>
                            <Timeline.Body className="text-sm text-stone-400">
                                Pilih jenis konsultasi sesuai dengan kebutuhan
                                anda dan buah hati.
                            </Timeline.Body>
                        </div>
                    </Timeline.Content>
                </Timeline.Item>
            </div>
        </>
    );
}

export default AlurKonsul;
