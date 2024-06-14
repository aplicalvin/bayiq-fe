import { Sidebar, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import {
    HiHome,
    HiLogin,
    HiPencil,
    HiSearch,
    HiShoppingBag,
    HiUsers,
    HiMenu,
    HiX,
} from "react-icons/hi";

const AdmSidebar = function () {
    const [currentPage, setCurrentPage] = useState("");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const newPage = window.location.pathname;
        setCurrentPage(newPage);
    }, [setCurrentPage]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* <div className="relative min-h-screen flex"> */}
            {/* // Mobile menu button */}
            <button className="md:hidden p-4" onClick={toggleSidebar}>
                {isSidebarOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
            {/* Sidebar */}
            <Sidebar
                className={`h-full dark:bg-gray-800 md:static absolute inset-0 transform ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } md:translate-x-0 transition-transform duration-200 ease-in-out`}
            >
                <div className="flex h-full flex-col justify-between py-2 dark:bg-gray-800">
                    <div>
                        <button
                            className="md:hidden p-4"
                            onClick={toggleSidebar}
                        >
                            {isSidebarOpen ? (
                                <HiX size={24} />
                            ) : (
                                <HiMenu size={24} />
                            )}
                        </button>
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
                                    className=" dark:bg-gray-700"
                                >
                                    Dashboard
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="/e-commerce/products"
                                    icon={HiShoppingBag}
                                    className={
                                        "/e-commerce/products" === currentPage
                                            ? " dark:bg-gray-700"
                                            : ""
                                    }
                                >
                                    Products
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="/admin/dasboard/"
                                    icon={HiUsers}
                                    className={
                                        "/admin/dasboard/" === currentPage
                                            ? " dark:bg-gray-700"
                                            : ""
                                    }
                                >
                                    Users list
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="/admin/dasboard/"
                                    icon={HiLogin}
                                >
                                    Sign in
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="/admin/dasboard/"
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
        </>
    );
};

export default AdmSidebar;
