import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="bg-white font">
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;