import { NavLink } from "react-router-dom";
import NaveItems from "./NaveItems";
import logo from "../../assets/Logo/job-search (1).png"
import { useContext } from "react";
import { AuthContext } from "../../Authentication/Provider/AuthProvider";

const Navbar = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className="font-medium text-base bg-white shadow py-3">
            <div className="flex items-center justify-between max-w-screen-xl mx-auto">
                <div className="flex items-center gap-2">
                    {/* logo and name */}
                    <div className="rounded-full outline-[#28b661] outline-2 outline outline-offset-2">
                        <img src={logo} className="w-16" alt="Job World" />
                        {/* border-[#28b661 */}
                    </div>
                    <h1 className="text-4xl font-semibold text-[#23a757]">World</h1>
                </div>
                <div>
                    {/* nave list */}
                    <NaveItems />
                </div>
                <div className="flex items-center gap-2">
                    {/* Profile */}
                    <div>
                        <img className="w-[55px] h-[55px] rounded-full" src={user?.photoURL} alt="" />
                    </div>
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Login
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;