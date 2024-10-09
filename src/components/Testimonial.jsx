import Slider from "react-slick/lib/slider";

const TestimonialsList = [
    {
        id: "1",
        name: "John Doe",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos distinctio sunt incidunt similique cum explicabo quasi qui soluta ducimus, ea dolores iure consectetur magnam nam enim aut officia, odit perspiciatis.",
        img: "https://picsum.photos/101/101",
    },
    {
        id: "2",
        name: "Steve Smith",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos distinctio sunt incidunt similique cum explicabo quasi qui soluta ducimus, ea dolores iure consectetur magnam nam enim aut officia, odit perspiciatis.",
        img: "https://picsum.photos/102/102",
    },
    {
        id: "3",
        name: "Kristen",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos distinctio sunt incidunt similique cum explicabo quasi qui soluta ducimus, ea dolores iure consectetur magnam nam enim aut officia, odit perspiciatis.",
        img: "https://picsum.photos/103/103",
    },
    {
        id: "4",
        name: "Ariana",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos distinctio sunt incidunt similique cum explicabo quasi qui soluta ducimus, ea dolores iure consectetur magnam nam enim aut officia, odit perspiciatis.",
        img: "https://picsum.photos/104/104",
    },
];

const Testimonial = () => {
    const setting = {
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        dots: true,
        arrow: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
    };

    return (
        <div className="py-14 mb-10">
            <div className="container">
                {/* Header */}
                <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto">
                    <p className="text-orange-600 uppercase font-semibold">
                        Our Testimonials
                    </p>
                    <h1 className="font-semibold text-3xl">
                        Find Online Tutor in Any Subject
                    </h1>
                </div>
                {/* TestimonialsList */}
                <div className="сontainer">
                    <Slider {...setting}>
                        {TestimonialsList.map((data) => (
                            <div key={data.id}>
                                <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-secondary/10">
                                    <div className="flex justify-start items-center gap-5">
                                        <img
                                            src={data.img}
                                            alt=""
                                            className="w-16 h-16 rounded-full "
                                        />
                                        <div className="">
                                            <p className="text-xl font-bold text-black/80">
                                                {data.name}
                                            </p>
                                            <p>{data.name}</p>
                                        </div>
                                    </div>
                                    <div className="py-6 space-y-4">
                                        <p className="text-sm text-gray-500">
                                            {data.text}
                                        </p>
                                        <p>⭐⭐⭐⭐⭐</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
