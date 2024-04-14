/* eslint-disable react/no-unescaped-entities */
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import BannerSlider from "./BannerSlider";
import CustomTabPanel from "../Home/CustomTaqbPanel"
import CarouselClients from "./Carousel/CarouselClients";
import Subscribe from "./Subscribe";

const Home = () => {


    return (
        <div>
            <div className="relative">
                <Navbar />
            </div>
            <div>
                <BannerSlider />
            </div>
            <div className="max-w-screen-xl mx-auto flex items-center flex-col ">
                <div className="mt-12 mb-3 text-center py-4">
                    <button className="bg-[#23a757] text-white px-6 py-0 font-normal font-roboto text-[18px] rounded-sm">Job Categories</button>
                    <p className="text-gray-700 font-roboto font-normal text-base w-[900px] mt-5">
                        "Job World: Your Gateway to Success! Explore endless career opportunities, connect with top employers, and showcase your talents. Let us guide you on your path to success. Join us today and unlock your full potential!"</p>
                    <div className="w-[300px] h-0.5 rounded-md mx-auto mt-2 bg-[#23a757]"></div>
                </div>
                <div className="mt-8">
                    <CustomTabPanel />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">

                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-lg px-6 py1 font-semibold text-white bg-[#23a757] text-center w-[250px] rounded-md">Client Say About Us</h1>
                    <p className="text-sm text-gray-700 font-roboto w-[750px] text-center mt-3">Job World is an online platform connecting employers and job seekers. It offers job listings, resume database, advanced search filters, user profiles, and application management to streamline the recruitment process efficiently and effectively.</p>
                </div>

                <CarouselClients />
            </div>
            <div className="max-w-screen-xl mx-auto py-10 mb-9">
                <Subscribe/>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;