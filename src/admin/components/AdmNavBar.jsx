import { DarkThemeToggle, Navbar } from "flowbite-react";

const AdmNavBar = function () {
    return (
        <Navbar fluid className="bg-gray-400">
            <div className=" w-full p-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Navbar.Brand href="/admin/dashboard">
                            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                                Super Admin
                            </span>
                        </Navbar.Brand>
                    </div>
                    <div className="flex items-center gap-3">
                        <DarkThemeToggle />
                    </div>
                </div>
            </div>
        </Navbar>
    );
};

export default AdmNavBar;
