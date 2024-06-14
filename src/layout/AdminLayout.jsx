import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import { Sidebar, TextInput, DarkThemeToggle, Navbar } from "flowbite-react";
import {
    HiHome,
    HiLogin,
    HiPencil,
    HiSearch,
    HiShoppingBag,
    HiUsers,
    HiMenu,
} from "react-icons/hi";
import Footer from "../components/Footer"; // Correct import statement
import Michie from "../assets/assets/image/image3.png";

const AdmSidebar = ({ isSidebarOpen }) => {
    const [currentPage, setCurrentPage] = useState("");

    useEffect(() => {
        const newPage = window.location.pathname;
        setCurrentPage(newPage);
    }, []);

    return (
        <Sidebar
            className={`h-full mt-24 md:mt-0 dark:bg-gray-800 md:static absolute inset-0 transform ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 transition-transform duration-200 ease-in-out`}
        >
            <div className="flex h-full flex-col justify-between py-2 dark:bg-gray-800">
                <div>
                    <form className="pb-3 md:hidden">
                        <TextInput
                            icon={HiSearch}
                            type="search"
                            placeholder="Search"
                            required
                            size={32}
                        />
                    </form>
                    <Sidebar.Items className="dark:bg-gray-800">
                        <Sidebar.ItemGroup className="dark:bg-gray-800">
                            <Sidebar.Item
                                href="/admin/dashboard/"
                                icon={HiHome}
                                className="dark:bg-gray-700"
                            >
                                Dashboard
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="/e-commerce/products"
                                icon={HiShoppingBag}
                                className={
                                    "/e-commerce/products" === currentPage
                                        ? "dark:bg-gray-700"
                                        : ""
                                }
                            >
                                Products
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="/admin/dashboard/"
                                icon={HiUsers}
                                className={
                                    "/admin/dashboard/" === currentPage
                                        ? "dark:bg-gray-700"
                                        : ""
                                }
                            >
                                Users list
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="/admin/dashboard/"
                                icon={HiLogin}
                            >
                                Sign in
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="/admin/dashboard/"
                                icon={HiPencil}
                            >
                                Sign up
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item icon="">Halo</Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </div>
            </div>
        </Sidebar>
    );
};

AdmSidebar.propTypes = {
    isSidebarOpen: PropTypes.bool.isRequired, // PropTypes validation
};

const AdmNavBar = ({ toggleSidebar }) => {
    return (
        <Navbar fluid className="bg-gray-400">
            <div className="w-full p-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Navbar.Brand href="/admin/dashboard">
                            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                                Super Admin
                            </span>
                        </Navbar.Brand>
                    </div>
                    <div className="flex items-center gap-3 md:hidden">
                        <DarkThemeToggle />
                        <button
                            className="p-4 text-gray-400"
                            onClick={toggleSidebar}
                        >
                            <HiMenu size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </Navbar>
    );
};

AdmNavBar.propTypes = {
    toggleSidebar: PropTypes.func.isRequired, // PropTypes validation
};

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <AdmNavBar toggleSidebar={toggleSidebar} />
            <div className="flex bg-primary-100 min-h-screen max-w-screen-2xl mx-auto">
                <div>
                    <AdmSidebar isSidebarOpen={isSidebarOpen} />
                </div>
                <div
                    className="w-full bg-stone-200 dark:bg-stone-800 min-h-screen justify-between bg-cover"
                    style={{ backgroundImage: `url(${Michie})` }}
                >
                    <div className="w-full h-full bg-gray-50/60 p-4">
                        <div className="bg-stone-50 dark:bg-gray-700 dark:text-white p-4 rounded-lg">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AdminLayout;
