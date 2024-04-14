import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselClients = () => {

    const data = [
        {
            name: `Johan Margin`,
            oq: `Web Developer`,
            img: `https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600`,
            review: `This website is a game-changer! The user interface is intuitive, and the job listings are always up-to-date. I found my dream job within a week of signing up. Highly recommended for anyone looking to advance their career!`
        },
        {
            name: `Noman Shea`,
            oq: `Digital Marketer`,
            img: `https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600`,
            review: `Great platform with a wide range of job opportunities. The resume builder feature is especially helpful and streamlined the application process for me. However, I wish there were more industry-specific filters for job searches.`
        },
        {
            name: `Moha Milon`,
            oq: `Graphic Designer`,
            img: `https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600`,
            review: `Decent website with a good selection of job postings. However, I found the search functionality a bit clunky and not as user-friendly as some other job sites I've used. Still worth checking out if you're job hunting.`
        },
        {
            name: `Tolani Joni`,
            oq: `Digital Marketer`,
            img: `https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600`,
            review: `The website has potential but needs improvement. Some job listings were outdated, and the application process was confusing at times. Hopefully, they make updates to enhance the user experience soon.`
        },
        {
            name: `Sibani Khala`,
            oq: `Web Developer`,
            img: `https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=600`,
            review: `Overall, a reliable job search platform with helpful resources and job alerts. The mobile app is convenient for on-the-go job hunting. Would be perfect with a few tweaks to the search algorithm to better match candidates with jobs.`
        },
        {
            name: `Tompa Moni`,
            oq: `Graphic Designer`,
            img: `https://images.pexels.com/photos/785667/pexels-photo-785667.jpeg?auto=compress&cs=tinysrgb&w=600`,
            review: `I've tried several job search websites, and this one stands out for its user-friendly design and comprehensive job listings. The career advice articles are a valuable bonus. I've already recommended it to friends and colleagues!`
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className="w-3/4 m-auto">

            <div className="mt-7 mb-20">

                <Slider {...settings}>
                    {data.map((d, idx) => (
                        <div key={idx} className="bg-gray-50 h-[450px] text-gray-800 rounded-xl react-slick">

                            <div className="h-56 rounded-t-xl bg-[#23a757] flex justify-center items-center">
                                <img src={d.img} alt="" className="w-44 h-44 rounded-full" />
                            </div>


                            <div className="flex flex-col justify-center items-center gap-4 p-4 shadow">
                                <p className="text-xl font-semibold">{d.name}</p>
                                <p className="text-gray-500 text-md -mt-4">{d.oq}</p>
                                <p className="text-gray-700 text-sm font-roboto text-center">{d.review}</p>
                                <button className="bg-[#23a757] text-white px-6 py-1 rounded-xl">Read More</button>
                            </div>

                        </div>
                    ))}

                </Slider>
            </div>

        </div>
    );
};

export default CarouselClients;