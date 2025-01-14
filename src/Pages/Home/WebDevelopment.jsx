// import { useEffect, useState } from "react";
// import UseAxios from "../../Hooks/UseAxios";
// import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Authentication/Provider/AuthProvider";
import { useContext } from "react";
import { SplitWorld } from "./SplitWorld";
import { CiCalendarDate } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Animation from "../../Components/ReactAnimation/Animation";
import UseQuery from "../../Utils/UseQuery";


const WebDevelopment = () => {

    // const axios = UseAxios();

    const { user } = useContext(AuthContext)

    console.log(user?.photoURL)

    // const [userPJobs, setUserPJobs] = useState([]);

    // useEffect(() =>{
    //     axios.get('http://localhost:5001/addJob')
    //     .then(res => {
    //         setUserPJobs(res.data)
    //     })
    // },[])

    // const getJobUserPost = async () => {
    //     const res = await axios.get('/addJob')
    //     return res;
    // }

    // // eslint-disable-next-line no-unused-vars
    // const { data, isLoading, isFetching, isError } = useQuery({
    //     queryKey: ['usersPost'],
    //     queryFn: getJobUserPost,
    // })

    // eslint-disable-next-line no-unused-vars
    const { data, isLoading, isFetching, refetch } = UseQuery();
    // console.log(data, isFetching, isLoading, refetch)

    const webDevelopFilter = data?.filter(web => web.jobCategory === SplitWorld('web development'))
    console.log(webDevelopFilter)

    if (isLoading === true) {
        return <div className="w-[1000px] mx-auto flex justify-center items-center"><Animation /></div>
    }

    return (
        <div className="flex justify-center items-center">
            <div className="cardFirst">
                {
                    isLoading ? <div className="w-[1000px] mx-auto flex justify-center items-center"><Animation /></div> : webDevelopFilter?.map(webDevelop => <div className="cardSecond " key={webDevelop._id}>
                        <div className="cardThird">
                            <div className="cardForth">
                                <div className="cardSix">
                                    <h1 className="category font-roboto">{webDevelop?.jobCategory}</h1>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex gap-5 tracking-tight text-sm">
                                        <h1 className="jobTypeBtn"><CiCalendarDate />{webDevelop?.dateline}</h1>
                                        <h1 className="jobTypeBtn"><IoBagHandleOutline />{webDevelop?.jobType}</h1>
                                        <div className="flex gap-3 items-center">
                                            <h1 className="jobTypeBtn">Max Price: {webDevelop?.maxSalary} USD</h1>
                                            <h1 className="jobTypeBtn">Min Price: {webDevelop?.minSalary} USD</h1>
                                        </div>
                                    </div>
                                    <p className="mt-2 text-gray-800 font-normal text-lg tracking-wide font-roboto">{webDevelop?.description && webDevelop.description.slice(0, 90)}</p>
                                </div>
                            </div>
                        </div>
                        <Link to={`/webDetails/${webDevelop._id}`}>
                            <div className="bidBtn">
                                <button>Bid Now</button>
                            </div>
                        </Link>


                    </div>)
                }
            </div>
        </div>
    );
};

export default WebDevelopment;