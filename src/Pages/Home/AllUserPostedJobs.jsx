import { useEffect, useState } from "react";
import UseAxios from "../../Hooks/UseAxios";

const AllUserPostedJobs = () => {

    const axios =  UseAxios()

    const [userPJobs, setUserPJobs] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:5001/addJob')
        .then(res => {
            setUserPJobs(res.data)
        })
    },[])

    console.log(userPJobs)

    return (
        <div>
            <h1>User Posted Jobs: {userPJobs?.length}</h1>
        </div>
    );
};

export default AllUserPostedJobs;