import { useLoaderData } from "react-router-dom";
import Navbar from "../../../Shared/Navbar/Navbar";
import Footer from "../../../Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../../Authentication/Provider/AuthProvider";
import bannerOfJobDetails from "../../../assets/bannerofjobdetails.jpg"

const WebDetails = () => {

    const webDetail = useLoaderData();
    console.log(webDetail)
    const { user } = useContext(AuthContext)

    return (
        <div>
            <div>
                <Navbar />
            </div>

            {/* banner */}
            <div className="relative">
                <img className="h-[300px] w-full object-cover relative" src={bannerOfJobDetails} alt="" />
                <div className="bg-gradient-to-r from-black to-black absolute w-full h-full top-0 opacity-75 flex flex-col justify-center">
                    <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit perspiciatis totam placeat illum laborum suscipit vel consectetur nam quaerat beatae rerum cupiditate voluptatum odio ipsam maxime nobis, accusantium quia recusandae?</p>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-3">
                    <div className="col-span-2">
                        <div>
                            <p>{webDetail?.description}</p>
                        </div>
                    </div>

                    <div className="grid col-span-1">
                        <p>{webDetail?.description}</p>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default WebDetails;