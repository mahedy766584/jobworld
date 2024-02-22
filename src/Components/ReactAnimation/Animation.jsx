
import Lottie from "lottie-react";
import animationJson from "../../assets/animation.json"

const Animation = () => {
    
    
    return (
        <div className="w-[100vw] h-[50vh] bg-white flex justify-center items-center">
            <Lottie style={{
                width : "190px",
                height : "190px"
            }} animationData={animationJson}/>
        </div>
    );
};

export default Animation;