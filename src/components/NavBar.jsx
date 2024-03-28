"use client";

import { Button, Navbar } from "flowbite-react";
import logo from "../assets/assets/logo.png";

function NavBar() {
    return (
        <Navbar fluid rounded className="bg-color-primary-100 py-4 lg:px-20">
            <Navbar.Brand href="/">
                <img src={logo} className="mr-3 h-6 sm:h-12" alt="Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
            </Navbar.Brand>
            <div className="flex md:order-2 bg-color-primary-600 rounded-md hover:bg-color-primary-700">
                <Button>Masuk</Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link className="px-6 py-6 border " href="/edukasi">
                    Edukasi
                </Navbar.Link>
                <Navbar.Link className="px-6 py-6 text" href="konsultasi">
                    Konsultasi
                </Navbar.Link>
                <Navbar.Link className="px-6 py-6 text" href="informasi">
                    Informasi
                </Navbar.Link>
                <Navbar.Link className="px-6 py-6 text" href="komunitas">
                    Komunitas
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
