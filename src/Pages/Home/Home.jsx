import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import BannerSlider from "./BannerSlider";
import CustomTabPanel from "../Home/CustomTaqbPanel"

const Home = () => {


    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <BannerSlider />
            </div>
            <div className="max-w-screen-xl mx-auto">
                <CustomTabPanel/>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;