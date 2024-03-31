import { Footer } from "flowbite-react";
import {
    BsDribbble,
    BsFacebook,
    BsGithub,
    BsInstagram,
    BsTwitter,
} from "react-icons/bs";
import logo from "../assets/assets/logo.png";

function Foter() {
    return (
        <>
            <Footer container className="bg-primary-600 rounded-none ">
                <div className="w-full text-center">
                    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                        <Footer.Brand
                            // href=
                            src={logo}
                            alt="Logo"
                            name="Vidzi"
                        />
                        <Footer.LinkGroup className="text-stone-200">
                            <Footer.Link href="#">About</Footer.Link>
                            <Footer.Link href="#">Privacy Policy</Footer.Link>
                            <Footer.Link href="#">Licensing</Footer.Link>
                            <Footer.Link href="#">Contact</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <Footer.Divider />
                    <Footer.Copyright
                        className="text-stone-50"
                        href=""
                        by="Vidzi™"
                        year={2022}
                    />
                </div>
            </Footer>
        </>
    );
}

export default Foter;
