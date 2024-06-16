import { Footer } from "flowbite-react";

function Foter() {
    return (
        <>
            <Footer container className="bg-primary-600 rounded-none ">
                <div className="w-full text-center">
                    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                        <Footer.LinkGroup className="text-stone-200">
                            <Footer.Link href="#">About</Footer.Link>
                            <Footer.Link href="#">Privacy Policy</Footer.Link>
                            <Footer.Link href="#">Licensing</Footer.Link>
                            <Footer.Link href="#">Contact</Footer.Link>
                        </Footer.LinkGroup>
                        <Footer.Copyright
                            className="text-stone-50"
                            href=""
                            by="Victoria"
                            year={2024}
                        />
                    </div>
                </div>
            </Footer>
        </>
    );
}

export default Foter;
