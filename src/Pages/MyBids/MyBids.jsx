/* eslint-disable react/no-unknown-property */
import { useContext, useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import { AuthContext } from "../../Authentication/Provider/AuthProvider";
import axios from "axios";
import BidsTable from "./BidsTable";

const MyBids = () => {

    const [myBidsS, setMyBidsS] = useState([])

    // const [myBidsT, setMyBidsT] = useState()

    const { user } = useContext(AuthContext)

    const url = `http://localhost:5001/bidJob?email=${user?.email}`

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res.data)
                setMyBidsS(res.data)
            })
    }, [url])
    console.log(myBidsS)
    console.log(myBidsS.status)

    const handleStatusComplete = (id) => {
        fetch(`http://localhost:5001/bidJob/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ status: 'conform' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0){
                    const remaining = myBidsS?.filter(myBids => myBids._id !== id)
                    const update = myBidsS?.find(myBids => myBids._id !== id)
                    update.status = "conform"
                    const newBids = [update, ...remaining]
                    setMyBidsS(newBids)
                }
        })
    }

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>

                {/* bg-[#28b661] */}

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-10">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-all-search" className="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Job title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Deadline
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myBidsS?.map(bids => <BidsTable key={bids._id} bids={bids} handleStatusComplete={handleStatusComplete} />)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default MyBids;