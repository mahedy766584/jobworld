import { NavLink } from "react-router-dom";

const NaveItems = () => {
    return (
        <div className="flex items-center gap-5 font-roboto text-[18px] font-normal">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#28b661] border-b-2 border-[#28b661]" : ""
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/addJob"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#28b661] border-b-2 border-[#28b661]" : ""
                }
            >
                Add Job
            </NavLink>
            <NavLink
                to="/myPostedJobs"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#28b661] border-b-2 border-[#28b661]" : ""
                }
            >
                My posted Jobs
            </NavLink>
            <NavLink
                to="/myBids"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#28b661] border-b-2 border-[#28b661]" : ""
                }
            >
                My Bids
            </NavLink>
            <NavLink
                to="/bidsRequests"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#28b661] border-b-2 border-[#28b661]" : ""
                }
            >
                Bid Requests
            </NavLink>
        </div>
    );
};

export default NaveItems;