/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { AuthContext } from "../../Authentication/Provider/AuthProvider";
import BidRequestTable from "./BidRequestTable";
import Footer from "../../Shared/Footer/Footer";

const BidRequest = () => {

    const [bidJob, setBidJob] = useState();

    const { user } = useContext(AuthContext)

    const url = `http://localhost:5001/bidJob`;

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setBidJob(res.data)
            })
    }, [])

    const handleAccept = (id) => {
        fetch(`http://localhost:5001/bidJob/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ status: 'accept' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = bidJob?.filter(myBids => myBids._id !== id)
                    const update = bidJob?.find(myBids => myBids._id !== id)
                    update.status = "accept"
                    const newBids = [update, ...remaining]
                    setBidJob(newBids)
                }
            })
    }

    const handleReject = (id) => {
        fetch(`http://localhost:5001/bidJob/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ status: 'reject' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = bidJob?.filter(myBids => myBids._id !== id)
                    const update = bidJob?.find(myBids => myBids._id !== id)
                    update.status = "reject"
                    const newBids = [update, ...remaining]
                    setBidJob(newBids)
                }
            })
    }

    const bidJobFilter = bidJob?.filter(bid => bid.buyerEmail === user?.email)
    console.log(bidJobFilter, user.email)

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-10 px-8">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Job title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email (who bid the job)
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Deadline
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Reject
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Accept
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bidJobFilter?.map(bids => <BidRequestTable key={bids._id} bids={bids} handleAccept={handleAccept} handleReject={handleReject} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default BidRequest;