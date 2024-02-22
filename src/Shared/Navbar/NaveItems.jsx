import { NavLink } from "react-router-dom";

const NaveItems = () => {
    return (
        <div className="flex items-center gap-5">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/addJob"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Add Job
            </NavLink>
            <NavLink
                to="/myPostedJobs"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                My posted Jobs
            </NavLink>
            <NavLink
                to="/myBids"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                My Bids
            </NavLink>
            <NavLink
                to="/bidsRequests"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Bid Requests
            </NavLink>
            <NavLink
                to="/bidsRequests"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Bid Requests
            </NavLink>
        </div>
    );
};

export default NaveItems;