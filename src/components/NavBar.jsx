import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Button } from "@material-tailwind/react";
import { GitHubLink } from "../assets/text";
import { LinkedinLink } from "../assets/text";
import { CvLink } from "../assets/text";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
    return (
        <ul className=" my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-3">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium text-lg lg:text-xl"
            >
                <a href="#" className="flex text-right hover:text-blue-500 transition-colors">
                    Home
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium text-lg lg:text-xl"
            >
                <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                    About
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium text-lg lg:text-xl"
            >
                <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                    Projects
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium text-lg lg:text-xl"
            >
                <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                    Technologies
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium text-lg lg:text-xl"
            >
                <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                    Contact
                </a>
            </Typography>

            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium text-lg lg:text-xl"
            >
                <a href={CvLink} className=" items-center hover:text-blue-500 transition-colors flex flex-wrap">
                    <div className="flex w-max items-end">
                        <Button className="flex text-sm" color="blue" size="sm">Download - CV</Button>
                    </div>
                </a>
            </Typography>

            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="bg p-1 font-medium flex gap-3 text-3xl"
            >
                <a href={GitHubLink} target="_blank" className="flex items-center hover:text-blue-500 transition-colors">
                    <FaGithub />
                </a>
                <a href={LinkedinLink} target="_blank" className="flex items-center hover:text-blue-500 transition-colors">
                    <FaLinkedin />
                </a>
            </Typography>

        </ul>
    );
}

export function NavBar() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <div className="mb-5 lg:mb-10">
            <Navbar className="lg:mx-auto bg-white">
                <div className=" flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="#"
                        variant="h6"
                        className="mr-4 cursor-pointer py-1.5 text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-600 via-purple-500 to-blue-400 bg-clip-text text-transparent"
                    >
                        Supun Tharaka
                    </Typography>
                    <div className="hidden lg:block">
                        <NavList />
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <NavList />
                </Collapse>
            </Navbar>
        </div>
    );
}