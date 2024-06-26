// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../assets/assets/logo.png";

function NavBar() {
    return (
        <Navbar fluid rounded className="bg-primary-200 h-fit lg:px-20">
            <Navbar.Brand href="/">
                <img src={logo} className="mr-3 h-6 sm:h-12" alt="Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
            </Navbar.Brand>
            <Navbar.Toggle className=" " />
            <Link
                className="lg:hidden flex py-3 px-6 bg-primary-600 text-stone-50 rounded-md hover:bg-primary-700"
                to="/login"
            >
                Masuk
            </Link>
            <Link
                className="lg:flex hidden py-3 px-6 bg-primary-600 text-stone-50 rounded-md hover:bg-primary-700"
                to="/login"
            >
                Masuk
            </Link>
        </Navbar>
    );
}

export default NavBar;
