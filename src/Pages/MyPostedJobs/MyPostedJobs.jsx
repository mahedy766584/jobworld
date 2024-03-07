import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/Provider/AuthProvider";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import { CiCalendarDate } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const MyPostedJobs = () => {

    const { user } = useContext(AuthContext);


    const [myJob, setMyJob] = useState([])

    const url = `http://localhost:5001/addJob?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyJob(data)
            })
    }, [url])

    console.log(myJob)

    const handleDelete = (_id) => {
        console.log('delete', _id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:5001/addJob/${_id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            const remaining = myJob?.filter(jobCart => jobCart._id !== _id)
                            setMyJob(remaining)
                        }
                    })

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div>

            <div>
                <Navbar />
            </div>

            <div className="">
                {
                    myJob?.map(job => <div className="cardSecond " key={job._id}>
                        {/* style first part of card */}
                        <div className="cardThird w-full h-full">
                            <div className="cardForth">
                                <div className="cardSix">
                                    <h1 className="category font-roboto">{job?.jobCategory}</h1>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex gap-5 tracking-tight text-sm">
                                        <h1 className="jobTypeBtn"><CiCalendarDate />{job?.dateline}</h1>
                                        <h1 className="jobTypeBtn"><IoBagHandleOutline />{job?.jobType}</h1>
                                        <div className="flex gap-3 items-center">
                                            <h1 className="jobTypeBtn">Max Price: {job?.maxSalary} USD</h1>
                                            <h1 className="jobTypeBtn">Min Price: {job?.minSalary} USD</h1>
                                        </div>
                                    </div>
                                    <p className="mt-2 flex gap-2 text-gray-800 font-normal text-lg tracking-wide font-roboto">{job?.description && job.description.slice(0, 70)}
                                        <Link to={`/seeDetails/${job?._id}`}>
                                            <button className="text-[#28b661] font-medium">See Details...</button>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* button style with last of card*/}
                        <div className="flex flex-col gap-6">
                            <Link to={`/updateForm/${job._id}`}>
                                <button
                                    className="bg-[#28b661] p-3 text-white rounded-md hover:bg-slate-700 duration-500">
                                    <FaPen />
                                </button>
                            </Link>
                            <button
                                onClick={() => handleDelete(job?._id)}
                                className="bg-[#28b661] p-3 text-white rounded-md hover:bg-slate-700 duration-500">
                                <MdDelete />
                            </button>
                        </div>


                    </div>)
                }
            </div>

            <div>
                <Footer />
            </div>

        </div>
    );
};

export default MyPostedJobs;