import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import toast from "react-hot-toast";
// import toast from "react-hot-toast";

const UpdateForm = () => {

    const updateFormLoaded= useLoaderData();
    console.log(updateFormLoaded)

    const handleUpdateForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value || {};
        const name = form.name.value || {};
        const dateline = form.dateline.value || {};
        const minSalary = form.minSalary.value || {};
        const maxSalary = form.maxSalary.value || {};
        const jobCategory = form.jobCategory.value || {};
        const description = form.description.value || {};
        const jobTitle = form.JobTitle.value || {};
        const jobType = form.jobType.value || {};

        const updateData = {
            email,
            name,
            dateline,
            jobCategory,
            description,
            maxSalary,
            minSalary, jobTitle,
            jobType,
        }
        console.log(updateData)

        console.log('update form', `${updateFormLoaded._id}`)

        // const toastId = toast.loading('Loading.........')

        // fetch(`http://localhost:5001/addJob/${updateFormLoaded._id}`,{
        //     method: "PUT",
        //     headers: {
        //         "content-type" : "application/json",
        //     },
        //     body: JSON.stringify(updateDate)
        // })
        // .then(res => res.json())
        // .then(data =>{
        //     console.log(data)
        // })

        const toastId = toast.loading('Logging In')

        fetch(`http://localhost:5001/addJob/${updateFormLoaded._id}`,{
            method: "PUT",
            headers: {
                "content-type" : "application/json",
            },
            body: JSON.stringify(updateData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                console.log('Update successfully')
                toast.success('Your job post Successfully updated!', { id: toastId });
            }
        })
    }

    return (
        <div>

            <div>
                <Navbar />
            </div>

            <div>
                <div className="font-roboto py-10">
                    <form
                        onSubmit={handleUpdateForm}
                        className="
                        upDateForm max-w-screen-lg bg-white mx-auto py-4 rounded-md mt-10 mb-10  px-10">
                        <div className="bg-[#28b661] flex rounded-sm justify-center items-center py-4">
                            <h1 className="text-3xl font-semibold font-poppins text-white ">Submit your job</h1>
                        </div>
                        <div className="w-full flex items-start gap-6 mt-10">
                            <div className="w-full ">
                                <div className="relative z-0 w-full mb-12  group">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        defaultValue={updateFormLoaded?.name}
                                        className="block py-3  px-3 rounded-sm w-full text-sm text-gray-700 bg-transparent  border  border-gray-300 appearance-none font-roboto dark:text-white dark:border-gray-600 dark:focus:border-[#28b661] focus:outline-none focus:ring-0 focus:border-[#28b661] peer "
                                        placeholder="Name"
                                        required />
                                    <label
                                        htmlFor="name"
                                        className="peer-focus:font-medium rounded-sm absolute text-lg text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 -top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#28b661] peer-focus:dark:text-[#28b661]">Name</label>
                                </div>
                                <div className="relative z-0 w-full mb-12 group mt-10">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        defaultValue={updateFormLoaded?.email}
                                        disabled
                                        className="block py-3  px-3 rounded-sm w-full text-sm text-gray-700 bg-transparent  border  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#28b661] focus:outline-none focus:ring-0 focus:border-[#28b661] peer" placeholder="Email"
                                        required />
                                    <label
                                        htmlFor="email"
                                        className="peer-focus:font-medium rounded-sm absolute text-lg text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 -top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#28b661] peer-focus:dark:text-[#28b661]">Email</label>
                                </div>
                                <div className="relative flex items-center z-0 w-full mb-12 group mt-10">
                                    <input
                                        type="text"
                                        name="JobTitle"
                                        id="JobTitle"
                                        defaultValue={updateFormLoaded?.jobTitle}
                                        className="block py-3   px-3 rounded-sm w-full text-sm text-gray-700 bg-transparent  border  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#28b661] focus:outline-none focus:ring-0 focus:border-[#28b661] peer" placeholder=" Type Address "
                                        required />
                                    <label
                                        htmlFor="JobTitle"
                                        className="peer-focus:font-medium rounded-sm absolute text-lg text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 -top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#28b661] peer-focus:dark:text-[#28b661]">Job title</label>
                                </div>
                            </div>
                            <div className="w-full ">
                                <div className="relative z-0 w-full mb-12 flex items-center group">
                                    <select
                                        className="block py-3   px-3 rounded-sm w-full text-sm text-gray-700 bg-transparent  border  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#28b661] focus:outline-none focus:ring-0 focus:border-[#28b661] peer"
                                        name="jobCategory"
                                        defaultValue={updateFormLoaded?.jobCategory}
                                        id="jobCategory">
                                        <option selected disabled>Select Category</option>
                                        <option value="web development">Web Development</option>
                                        <option value="graphic design">Graphic Design</option>
                                        <option value="digital marketing">Digital Marketing</option>
                                    </select>
                                    <label htmlFor="jobCategory"
                                        className="absolute  right-1 text-xl text-gray-700 
                                    peer-focus:font-medium rounded-sm  dark:text-gray-400 peer-focus:text-[#28b661] peer-focus:dark:text-[#28b661]
                                    "><IoMdArrowDropdown /></label>
                                    <label
                                        htmlFor="jobCategory"
                                        className="peer-focus:font-medium absolute text-lg text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 -top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#28b661] peer-focus:dark:text-[#28b661] ">Job Category</label>
                                </div>
                                <div className="relative z-0 w-full mb-12  flex items-center group">
                                    <select
                                        className="block py-3   px-3 rounded-sm w-full text-sm text-gray-700 bg-transparent  border  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#28b661] focus:outline-none focus:ring-0 focus:border-[#28b661] peer"
                                        name="jobType"
                                        defaultValue={updateFormLoaded?.jobType}
                                        id="jobType">
                                        <option selected disabled>Select Job Type</option>
                                        <option value="full time jobs">Full Time Jobs</option>
                                        <option value="part time jobs">Part Time Jobs</option>
                                        <option value="work form home">Work Form Home</option>
                                        <option value="internship jobs">Internship Jobs</option>
                                        <option value="Temporary jobs">Temporary Jobs</option>
                                    </select>
                                    <label htmlFor="jobType"
                                        className="absolute  right-1 text-xl text-gray-700 
                                    peer-focus:font-medium rounded-sm  dark:text-gray-400 peer-focus:text-[#28b661] peer-focus:dark:text-[#28b661]
                                    "><IoMdArrowDropdown /></label>
                                    <label
                                        htmlFor="jobType"
                                        className="peer-focus:font-medium absolute text-lg text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 -top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#28b661] peer-focus:dark:text-[#28b661] ">Job Type</label>
                                </div>
                                <div className="flex items-center   gap-5">
                                    <div className="relative z-0 w-full flex items-center   group">
                                        <input
                                            type="text"
                                            name="minSalary"
                                            id="minSalary"
                                            defaultValue={updateFormLoaded?.minSalary}
                                            className="block py-3   px-3 rounded-sm w-full text-sm text-gray-700 bg-transparent  border  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#28b661] focus:outline-none focus:ring-0 focus:border-[#28b661] peer"
                                            placeholder="Min Salary"
                                            required />
                                        <label
                                            htmlFor="maxSalary"
                                            className="peer-focus:font-medium rounded-sm absolute text-lg text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 -top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#28b661] peer-focus:dark:text-[#28b661]">Monthly Salary</label>
                                        <div className="absolute right-2 text-sm text-gray-500"><h1>USD</h1></div>
                                    </div>
                                    <div className="relative z-0 w-full  group flex items-center">
                                        <input
                                            type="text"
                                            name="maxSalary"
                                            id="maxSalary"
                                            defaultValue={updateFormLoaded?.maxSalary}
                                            className="block py-3   px-3 rounded-sm w-full text-sm text-gray-700 bg-transparent  border  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#28b661] focus:outline-none focus:ring-0 focus:border-[#28b661] peer"
                                            placeholder="Max Salary"
                                            required />
                                        <label
                                            htmlFor="maxSalary"
                                            className="peer-focus:font-medium rounded-sm absolute text-lg text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 -top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#28b661] peer-focus:dark:text-[#28b661]"></label>
                                        <div className="absolute right-2 text-sm text-gray-500"><h1>USD</h1></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative z-0 w-full mb-12   group">
                            <input
                                type="date"
                                name="dateline"
                                id="dateline"
                                defaultValue={updateFormLoaded?.dateline}
                                className="block py-3  px-3 rounded-sm w-full text-sm text-gray-700 bg-transparent  border  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#28b661] focus:outline-none focus:ring-0 focus:border-[#28b661] peer "
                                placeholder="Dateline"
                                required />
                            <label
                                htmlFor="dateline"
                                className="peer-focus:font-medium rounded-sm absolute text-lg text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 -top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#28b661] peer-focus:dark:text-[#28b661]">Dateline</label>
                        </div>

                        <div className="relative -mt-8 w-full mb-12 group z-0 ">
                            <h1 id="description" className="text-lg text-gray-500 dark:text-gray-400">Description</h1>
                            <textarea
                                className="peer-focus:font-medium  text-sm text-gray-900 duration-300 focus:text-gray-900 rounded-md focus:rounded-md focus:dark:text-[#28b661] p-3 h-28 border-2  w-full relative dark:text-white dark:border-gray-600 dark:focus:border-[#28b661] focus:outline-none focus:ring-0 focus:border-[#28b661] "
                                name="description"
                                id="description"
                                defaultValue={updateFormLoaded?.description}
                                cols="56" rows="4"
                                placeholder="Career Description"
                                required
                            ></textarea>
                        </div>

                        <div className="visitedStyle">
                            <div
                                className="-mt-5 w-full">
                                <button
                                    type="submit"
                                    className="text-whit focus:border-none flex gap-2 items-center justify-center  relative bg-[#28b661] hover:bg-[#28b661] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#28b661] dark:hover:bg-[#28b661] text-white  dark:focus:ring-[#28b661]">Add Job <p className="text-sm"><FaPlus /></p></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div>
                <Footer />
            </div>

        </div>
    );
};

export default UpdateForm;