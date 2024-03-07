
import Lottie from "lottie-react";
import errorAnimation from "../assets/error.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="w-[100vw] h-[100vh] font-roboto bg-white flex flex-col text-center justify-center items-center">
            <div>
                <Lottie style={{
                    width: "350px",
                    height: "350px"
                }} animationData={errorAnimation} />
            </div>
            <div className="space-y-2">
                <h1 className="text-3xl font-medium font-roboto tracking-wide text-gray-800">Page Not Found</h1>
                <p className="text-lg font-normal text-gray-500"> Oops!!!! you tried to access a page which is not available. go back to Home</p>
                <Link to={'/'}><button className="bg-[#25b65f] mt-3 font-medium text-lg px-10 py-2 text-white rounded-sm">Back to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;