import DashProfile from "../components/Dashboard/DashboardTab";

function Dashboard() {
    return (
        <>
            <div className="gap-2 w-full max-w-[1440px] min-h-screen p-4 md:p-8 mx-auto">
                <h1 className="font-bold text-3xl  text-stone-900">
                    Dashboard
                </h1>
                <DashProfile />
            </div>
        </>
    );
}

export default Dashboard;
