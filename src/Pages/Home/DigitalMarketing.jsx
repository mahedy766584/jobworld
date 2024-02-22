
// import { useEffect, useState } from "react";
import UseAxios from "../../Hooks/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Authentication/Provider/AuthProvider";
import { useContext } from "react";
import { SplitWorld } from "./SplitWorld";
import { CiCalendarDate } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import Animation from "../../Components/ReactAnimation/Animation";


const DigitalMarketing = () => {

    const axios = UseAxios();

    const { user } = useContext(AuthContext)

    console.log(user?.photoURL)

    // const [userPJobs, setUserPJobs] = useState([]);

    // useEffect(() =>{
    //     axios.get('http://localhost:5001/addJob')
    //     .then(res => {
    //         setUserPJobs(res.data)
    //     })
    // },[])

    const getJobUserPost = async () => {
        const res = await axios.get('/addJob')
        return res;
    }

    // eslint-disable-next-line no-unused-vars
    const { data, isLoading, isFetching, isError } = useQuery({
        queryKey: ['usersPost'],
        queryFn: getJobUserPost,
    })

    const digitalMarketingFilter = data?.data.filter(digital => digital.jobCategory === SplitWorld('digital marketing'))
    console.log(digitalMarketingFilter)

    console.log(data?.data)

    if(isLoading === true){
        return <div className="w-[1000px] mx-auto flex justify-center items-center"><Animation/></div>
    }


    console.log(data)

    return (
        <div className="">
            <div className="cardFirst">
                {
                    isLoading ? <div className="w-[1000px] mx-auto flex justify-center items-center"><Animation/></div> : digitalMarketingFilter?.map(digital => <div className="cardSecond " key={digital._id}>
                        {/* style first part of card */}
                        <div className="cardThird">
                            {/* profile */}
                            <div className="profile">
                                <img className="w-[80px] h-[80px] rounded-full" src={user?.photoURL} alt="" />
                            </div>
                            <div className="cardForth">
                                <div className="cardSix">
                                    <h1 className="category font-roboto first-letter:uppercase">{digital?.jobCategory}</h1>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex gap-5 tracking-tight text-sm">
                                        <h1 className="jobTypeBtn"><CiCalendarDate />{digital?.dateline}</h1>
                                        <h1 className="jobTypeBtn"><IoBagHandleOutline />{digital?.jobType}</h1>
                                        <div className="flex gap-3 items-center">
                                            <h1 className="jobTypeBtn">Max Price: {digital?.maxSalary} USD</h1>
                                            <h1 className="jobTypeBtn">Min Price: {digital?.minSalary} USD</h1>
                                        </div>
                                    </div>
                                    <p className="mt-2">{digital?.description && digital.description.slice(0, 90)}</p>
                                </div>
                            </div>
                        </div>
                        {/* button style with last of card*/}
                        <div className="bidBtn">
                            <button>Bid Now</button>
                        </div>


                    </div>)
                }
            </div>

            <div>
                {/* style first part of card */}
                <div>
                    {/* profile */}
                    <div>

                    </div>
                    <div>
                        <button></button>
                        <h1></h1>
                        <div>

                        </div>
                    </div>
                </div>
                {/* button style with last of card*/}
                <div>

                </div>

            </div>
        </div>
    );
};

export default DigitalMarketing;