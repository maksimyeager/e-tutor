import CountUp from "react-countup";

const NumberCounter = () => {
    return (
        <div className="bg-secondary text-white py-12">
            <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-3xl font-semibold">
                        <CountUp
                            end={872}
                            duration={3}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                        />
                    </p>
                    <p className="text-center">Expert Tutors</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-3xl font-semibold">
                        <CountUp
                            end={20000}
                            separator=","
                            suffix="+"
                            duration={3}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                        />
                    </p>
                    <p className="text-center">Hours content</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-3xl font-semibold">
                        <CountUp
                            end={298}
                            duration={3}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                        />
                    </p>
                    <p className="text-center">Subject and courses</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-3xl font-semibold">
                        <CountUp
                            end={72878}
                            separator=","
                            suffix="+"
                            duration={3}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                        />
                    </p>
                    <p className="text-center">Active students</p>
                </div>
            </div>
        </div>
    );
};

export default NumberCounter;
