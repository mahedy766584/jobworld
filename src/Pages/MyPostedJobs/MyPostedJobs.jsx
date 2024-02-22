import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/Provider/AuthProvider";

const MyPostedJobs = () => {

    const { user } = useContext(AuthContext);

    const [myJob, setMyJob] = useState([])

    const url = `http://localhost:5001/addJob?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setMyJob(data)
        })
    },[url])

    return (
        <div>
            <h1>My posted Jobs: {myJob.length}</h1>
        </div>
    );
};

export default MyPostedJobs;