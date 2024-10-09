import { motion } from "framer-motion";
import { SlideToLeft } from "../utility/animation";
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";

const WhyChooseData = [
    {
        id: 1,
        title: "One-on-one Teaching",
        desc: "All of our special education experts have a degree in special education.",
        icon: <GrYoga />,
        bgColor: "#0063ff",
        delay: 0.3,
    },
    {
        id: 2,
        title: "24/7 Tutor Availability",
        desc: "Our tutors are always available to respond as quick as possible for you",
        icon: <FaDumbbell />,
        bgColor: "#73bc00",
        delay: 0.6,
    },
    {
        id: 3,
        title: "Interactive Whiteboard",
        desc: "Our digital whiteboard equipped with audio and video chat fetures.",
        icon: <GiGymBag />,
        bgColor: "#fa6400",
        delay: 0.9,
    },
    {
        id: 4,
        title: "Affordable Prices",
        desc: "Choose an expert tutor based on your budget and per hour.",
        icon: <GiGymBag />,
        bgColor: "#fe6baa",
        delay: 0.9,
    },
];

const WhyChooseUs = () => {
    return (
        <div className="bg-[#f9fafc] py-24">
            <div className="container">
                <div className="text-center p-6 space-y-4 max-w-[500px] mx-auto mb-5">
                    <h1 className="text-orange-600 uppercase font-semibold">
                        Why Choose us
                    </h1>
                    <p className="text-3xl font-semibold">
                        Benefits of online tutoring services with us
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {WhyChooseData.map((item) => {
                        return (
                            <motion.div
                                key={item.id}
                                className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_0_rgba(0,0,0,0.15)]"
                                variants={SlideToLeft(item.delay)}
                                initial="hidden"
                                whileInView="visible"
                            >
                                <div
                                    className="text-white w-10 h-10 rounded-lg flex items-center justify-center"
                                    style={{ backgroundColor: item.bgColor }}
                                >
                                    <div className="text-2xl">{item.icon}</div>
                                </div>
                                <p className="font-semibold">{item.title}</p>
                                <p className="text-sm text-gray-500">
                                    {item.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
