import React from "react";
import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../assets/assets/logo.png";

function NavBar() {
    return (
        <Navbar fluid rounded className="bg-primary-50 h-fit lg:px-20">
            <Navbar.Brand href="/">
                <img src={logo} className="mr-3 h-6 sm:h-12" alt="Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
            </Navbar.Brand>
        </Navbar>
    );
}

export default NavBar;
