import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import bannerOfJobDetails from "../../assets/bannerofjobdetails.jpg"
import { IoBagHandleOutline, IoDocumentTextOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { FaPen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const SeeDetailsFMPC = () => {

    const seeDetailsLoaded = useLoaderData();
    console.log(seeDetailsLoaded)

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <div className="relative">
                    <img className="h-[300px] w-full object-cover relative" src={bannerOfJobDetails} alt="" />
                    <div className="bg-gradient-to-r from-gray-950 to-gray-700  absolute w-full h-full top-0 opacity-90 flex">
                        <div className="max-w-screen-xl flex justify-between relative items-center mx-auto ">
                            <div className="w-[300px] py-8 rounded-sm flex flex-col justify-center items-center bg-gray-200">
                                <button className="applyBtn flex items-center gap-3 rounded-full text-lg bg-[#25b65f] w-[200px] justify-center h-8 text-white"> UPDATE <FaPen /> </button>
                                <button className="applyBtn flex mt-3 rounded-full items-center gap-3 text-lg bg-[#25b65f] w-[200px] justify-center h-8 text-white">DELETE <MdDelete /></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-screen-xl mx-auto mb-20">
                    <div className="grid grid-cols-3 mt-8 gap-14">
                        <div className="col-span-2">
                            <div className="">
                                <div className="w-full h-10 bg-[#393939] rounded-sm py-7 px-4 mb-4 flex items-center">
                                    <span className="flex items-center gap-2"> <span className="bg-white text-black p-3 rounded-full"><IoDocumentTextOutline /></span> <h1 className="text-2xl font-roboto font-medium tracking-wide text-white">Jobs Description</h1></span>
                                </div>
                                <p className="text-lg tracking-tight font-roboto text-justify  font-normal text-gray-800 ">{seeDetailsLoaded?.description}</p>

                            </div>
                        </div>

                        <div className=" grid col-span-1">
                            <div className="cardRight ">
                                <div className="salaryCard h-36 px-6 py-4 rounded-sm">
                                    <h1 className="font-roboto font-medium text-3xl text-gray-800">Offered Salary</h1>
                                    <div className="flex items-center mt-3">
                                        <div className="w-[80px] h-0.5 bg-[#28b661]"></div>
                                        <div className="w-full h-[1px] bg-gray-200"></div>
                                    </div>
                                    <h1 className="font-roboto mt-5 font-medium text-xl tracking-wider text-gray-800"><span>{seeDetailsLoaded?.minSalary} USD</span> - <span>{seeDetailsLoaded?.maxSalary} USD</span></h1>
                                </div>

                                <div className="detailCard px-6 py-6 space-y-6 rounded-sm font-roboto">
                                    <div className="flex gap-3 items-center border-b py-2">
                                        <div className="p-4 rounded-full bg-[#28b661] text-white text-lg">
                                            <IoBagHandleOutline />
                                        </div>
                                        <div>
                                            <h1 className="text-lg font-medium text-gray-800">Job Title</h1>
                                            <h1 className="text-gray-700 tracking-wider">{seeDetailsLoaded?.jobTitle}</h1>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 items-center border-b py-2">
                                        <div className="p-4 rounded-full bg-[#28b661] text-white text-lg">
                                            <IoBagHandleOutline />
                                        </div>
                                        <div>
                                            <h1 className="text-lg font-medium text-gray-800">Job Type</h1>
                                            <h1 className="text-gray-700 tracking-wider">{seeDetailsLoaded?.jobType}</h1>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 items-center border-b py-2">
                                        <div className="p-4 rounded-full bg-[#28b661] text-white text-lg">
                                            <CiCalendarDate />
                                        </div>
                                        <div>
                                            <h1 className="text-lg font-medium text-gray-800">Dateline</h1>
                                            <h1 className="text-gray-700 tracking-wider">{seeDetailsLoaded?.dateline}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default SeeDetailsFMPC;