import { Link, NavLink } from "react-router-dom";
import NaveItems from "./NaveItems";
import logo from "../../assets/Logo/jobBag.png"
import { useContext, useState } from "react";
import { AuthContext } from "../../Authentication/Provider/AuthProvider";
import { IoMdHome } from "react-icons/io";
import { PiSignIn } from "react-icons/pi";
import { PiBagFill } from "react-icons/pi";
import { MdPostAdd } from "react-icons/md";
import { GoSignIn } from "react-icons/go";
import { FaUser } from "react-icons/fa";



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const [selectedCity, setSelectedCity] = useState(null);

    const handleLogout = () => {
        logOut()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    console.log(selectedCity)

    return (
        <div className="font-medium text-base bg-white shadow py-4 relative">
            <div className="flex items-center justify-between max-w-screen-xl mx-auto">
                <div className="flex items-center">
                    {/* logo and name */}
                    <div className="rounded-full">
                        {/* outline-[#28b661] outline-2 outline outline-offset-2 */}
                        <img src={logo} className="w-16" alt="Job World" />
                        {/* border-[#28b661 ]*/}
                    </div>
                    <h1 className="text-4xl font-semibold text-[#23a757]">Job <span className="text-gray-700">World</span></h1>
                </div>
                <div>
                    {/* nave list */}
                    <NaveItems />
                </div>

                {/* Profile */}
                {
                    user?.email ? <div>
                        <button onClick={() => setSelectedCity(!selectedCity)}><img className="w-[55px] h-[55px] rounded-full" src={user?.photoURL} alt="" /></button>
                        <div className={`absolute right-28 top-[75px] z-30 shadow-md rounded-sm bg-white   duration-500 font-roboto  ${selectedCity && 'py-4 px-6'}`}>
                            <div>
                                {
                                    selectedCity === true ? <ul className="flex flex-col items-start text-base font-normal space-y-3 text-gray-700">
                                        <span className="flex items-center gap-1">
                                            <FaUser/>
                                            <div>
                                                {
                                                    user?.displayName
                                                }
                                            </div>
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <IoMdHome />
                                            <NavLink
                                                to="/"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "text-[#28b661] border-b-2 border-[#28b661]" : ""
                                                }
                                            >
                                                Home
                                            </NavLink>
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <PiBagFill />
                                            <NavLink
                                                to="/addJob"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "text-[#28b661] border-b-2 border-[#28b661]" : ""
                                                }
                                            >
                                                Add Job
                                            </NavLink>
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MdPostAdd />
                                            <NavLink
                                                to="/myPostedJobs"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "text-[#28b661] border-b-2 border-[#28b661]" : ""
                                                }
                                            >
                                                My Posted Jobs
                                            </NavLink>
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <PiBagFill />
                                            <NavLink
                                                to="/myBids"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "text-[#28b661] border-b-2 border-[#28b661]" : ""
                                                }
                                            >
                                                My Bids
                                            </NavLink>
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <PiBagFill />
                                            <NavLink
                                                to="/bidsRequests"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "text-[#28b661] border-b-2 border-[#28b661]" : ""
                                                }
                                            >
                                                Bids Request
                                            </NavLink>
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <PiSignIn />
                                            <NavLink
                                                to="/login"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "text-[#28b661] border-b-2 border-[#28b661]" : ""
                                                }
                                            >
                                                Login
                                            </NavLink>
                                        </span>
                                        <button onClick={handleLogout} className="flex items-center gap-1"><GoSignIn /> Logout</button>
                                    </ul> : ""
                                }
                            </div>
                        </div>
                    </div> : <Link to={'/login'}>
                        <button className="text-lg font-roboto font-normal bg-[#28b661] px-6 hover:bg-slate-700 duration-500 py-2 rounded-sm cursor-pointer text-white flex items-center gap-0 "><GoSignIn /> Login/Register</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;