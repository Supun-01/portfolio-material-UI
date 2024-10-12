import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPhp } from "react-icons/fa";


function Technologies() {
    return (
        <div className="border text-white">
            <div>
                <h1 className="text-center text-4xl lg:text-5xl">Technologies</h1>
            </div>
            <div className=" border flex flex-wrap justify-center gap-4 lg:gap-6 text-6xl mt-5 lg:mt-10 mx-4">
                <FaReact className="text-cyan-500" />
                <SiExpress />
                <FaNodeJs className="text-yellow-400" />
                <SiMongodb className="text-green-500" />
                <RiTailwindCssFill className="text-blue-300" />
                <FaPhp className="text-blue-gray-400" />
                <FaHtml5 className="text-orange-700" />
                <FaPython className="text-blue-500" />


            </div>
        </div>
    )
}

export default Technologies