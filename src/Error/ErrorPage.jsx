
import Lottie from "lottie-react";
import errorAnimation from "../assets/error.json";

const ErrorPage = () => {
    return (
        <div>
            <div className="w-[100vw] h-[100vh] bg-white flex justify-center items-center">
            <Lottie style={{
                width : "390px",
                height : "390px"
            }} animationData={errorAnimation}/>
        </div>
        </div>
    );
};

export default ErrorPage;