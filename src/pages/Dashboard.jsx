import DashProfile from "../components/Dashboard/DashboardTab";

function Dashboard() {
    return (
        <>
            <div className="grid md:flex gap-2 w-full max-w-[1440px] min-h-screen  p-4 md:p-8 mx-auto">
                <h1 className="font-bold text-3xl  text-stone-800">
                    Dashboard
                </h1>
                <DashProfile />
            </div>
        </>
    );
}

export default Dashboard;
