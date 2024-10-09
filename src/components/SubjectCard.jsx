import { motion } from "framer-motion";
import { FaComputer, FaBook } from "react-icons/fa6";

const subjectsList = [
    {
        id: "1",
        name: "Engineering",
        icon: <FaBook />,
        color: "#0063ff",
        delay: 0.2,
    },
    {
        id: "2",
        name: "English",
        icon: <FaBook />,
        color: "#00c986",
        delay: 0.3,
    },
    {
        id: "3",
        name: "Programming",
        icon: <FaComputer />,
        color: "#922aee",
        delay: 0.4,
    },
    {
        id: "4",
        name: "Science",
        icon: <FaBook />,
        color: "#ea7516",
        delay: 0.5,
    },
    {
        id: "5",
        name: "History",
        icon: <FaBook />,
        color: "#075267",
        delay: 0.6,
    },
    {
        id: "6",
        name: "Psychology",
        icon: <FaBook />,
        color: "#986d1d",
        delay: 0.7,
    },
    {
        id: "7",
        name: "Web design",
        icon: <FaComputer />,
        color: "#b93838",
        delay: 0.8,
    },
    {
        id: "8",
        name: "See all",
        icon: <FaBook />,
        color: "#464646",
        delay: 0.9,
    },
];

const SubjectCard = () => {
    return (
        <div className="">
            <div className="container py-14 md:py-24">
                <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5">
                    <p className="text-orange-600 uppercase font-semibold">
                        Our tutor subjects
                    </p>
                    <h1 className="font-semibold text-3xl">
                        Find Online Tutor in Any Subject
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {subjectsList.map((subject) => {
                        return (
                            <motion.div
                                initial={{opacity: 0, x: -200}}
                                whileInView={{opacity: 1, x: 0}}
                                transition={{type: "spring", stiffness: 100, delay: subject.delay}}
                                key={subject.id}
                                className="border rounded-lg border-secondary/20 p-4 
                                flex justify-start sm:justify-center items-center gap-4 hover:!scale-105
                                hover:!shadow-xl duration-200 cursor-pointer"
                            >
                                <div
                                    className="w-10 h-10 rounded-md flex items-center justify-center"
                                    style={{
                                        backgroundColor: subject.color + "20",
                                        color: subject.color,
                                    }}
                                >
                                    {subject.icon}
                                </div>
                                <p>{subject.name}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SubjectCard;
