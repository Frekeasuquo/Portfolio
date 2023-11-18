import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss"
import { motion } from "framer-motion";

const Navbar = () => {

    return (
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5}}
                    animate={{ opacity: 1, scale: 1}}
                    transition={{ duration: 0.5 }}
                >
                    N
                </motion.span>
                <div className="social">
                    <a href="https://github.com/Frekeasuquo" target="_blank"          rel="noopener noreferrer">
                        <img src="/github-mark-white.png" alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/ndifreke-asuquo/" target="_blank"      rel="noopener noreferrer">
                        <img src="/linkedin-logo.png" alt="" />
                    </a>
                    <a href="https://twitter.com/Ndifreke_01" target="_blank" rel="noopener noreferrer">
                        <img src="/x-logo-png.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;