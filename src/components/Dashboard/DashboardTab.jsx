import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import DashProfile from "./DashProfile";
import DashKonsultasi from "./DashKonsul";
import DashHistory from "./DashHistory";
function DashboardTab() {
    return (
        <>
            <div className=" w-full max-w-3xl mx-auto pb-12">
                <Tabs aria-label="Tabs with underline" style="underline">
                    <Tabs.Item active title="Profile" icon={HiUserCircle}>
                        <DashProfile />
                    </Tabs.Item>
                    <Tabs.Item title="Konsultasi" icon={MdDashboard}>
                        <DashKonsultasi />
                    </Tabs.Item>
                    <Tabs.Item title="History" icon={HiAdjustments}>
                        <DashHistory />
                    </Tabs.Item>
                </Tabs>
            </div>
        </>
    );
}

export default DashboardTab;
