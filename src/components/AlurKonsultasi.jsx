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
                        <Timeline.Title className="text-lg font-bold text-stone-800">
                            E-Commerce UI code in Tailwind CSS
                        </Timeline.Title>
                        <Timeline.Body className="text-sm text-stone-500">
                            Get started with dozens of web components and
                            interactive elements built on top of Tailwind CSS.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            </div>
        </>
    );
}

export default AlurKonsul;
