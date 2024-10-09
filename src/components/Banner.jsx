import { motion } from "framer-motion";
import { SlideToUp } from "../utility/animation";

const Banner = ({ image, tag, title, subtitle, link, reverse}) => {
    return (
        <div className="bg-[#f9f9f9] pb-14">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0">
                    {/* Banner Image */}
                    <div className={`flex justify-start items-center ${reverse && "md:order-last md:justify-end"}`}>
                        <motion.img
                        initial={{opacity: 0, scale:0.5}}
                        whileInView={{opacity: 1, scale:1}}
                        transition={{type:"spring", stiffness: 100, delay: 0.5}}
                            src={image}
                            alt=""
                            className="w-[400px] object-cover"
                        />
                    </div>
                    {/* Banner Text */}
                    <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
                        <motion.p
                            variants={SlideToUp(0.5)}
                            initial="hidden"
                            whileInView="visible"
                            className="text-orange-600 uppercase font-semibold"
                        >
                            {tag}
                        </motion.p>
                        <motion.h1
                            variants={SlideToUp(0.7)}
                            initial="hidden"
                            whileInView="visible"
                            className="text-2xl font-semibold"
                        >
                            {title}
                        </motion.h1>
                        <motion.p
                            variants={SlideToUp(0.9)}
                            initial="hidden"
                            whileInView="visible"
                            className="text-sm text-slate-500"
                        >
                            {subtitle}
                        </motion.p>
                        <motion.div
                            variants={SlideToUp(1.1)}
                            initial="hidden"
                            whileInView={"visible"}
                            className="flex justify-center items-center md:justify-start"
                        >
                            <a href={link} className="primary-btn">
                                Get Started
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
