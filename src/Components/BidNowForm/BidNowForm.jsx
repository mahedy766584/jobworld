import Footer from "../../Shared/Footer/Footer";
// import { IoMdArrowDropdown } from "react-icons/io";
import Navbar from "../../Shared/Navbar/Navbar";
import { useLoaderData, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/Provider/AuthProvider";
import toast from "react-hot-toast";

const BidNowForm = () => {

    const bidFormData = useLoaderData();
    console.log(bidFormData)

    const { user } = useContext(AuthContext)

    const navigate = useNavigate();


    // const [isSubmitDisabled, setIsSubmitDisabled] = useState();


    const handleBidForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const dateline = form.dateline.value;
        const userEmail = form.userEmail.value;
        const buyerEmail = form.buyerEmail.value;

        const bidData = { price, 
            dateline, 
            userEmail, 
            buyerEmail,
            title: bidFormData.jobTitle
        }
        console.log(bidData)

        const toastId = toast.loading('Logging In')

        fetch('http://localhost:5001/bidJob', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(bidData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged > 0){
                    toast.success('This job Bided with successfully', {id: toastId})
                    navigate('/myBids')
                }
            })
    }

    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className="font-sans">
                <form
                    onSubmit={handleBidForm}
                    className="bidNowForm p-9 max-w-screen-md bg-white mx-auto py-4 rounded-md mt-10 mb-10  px-10">
                    <div className="bg-[#28b661] flex rounded-sm justify-center items-center py-4">
                        <h1 className="text-3xl font-semibold font-poppins text-white ">Bid Now this Job</h1>
                    </div>
                    <div className="w-full flex items-start gap-6 mt-10">
                        <div className="w-full ">
                            <div className="relative z-0 w-full mb-12  group">
                                <input
                                    type="text"
                                    name="price"
                                    id="price"
                                    className="block py-3  px-3 rounded-sm w-full text-sm text-gray-700 bg-transparent  border  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#28b661] focus:outline-none focus:ring-0 focus:border-[#28b661] peer "
                                    placeholder="Price"
                                    required />
                                <label
                                    htmlFor="price"
                                    className="peer-focus:font-medium rounded-sm absolute text-lg text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 -top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#28b661] peer-focus:dark:text-[#28b661]">Price(your bidding amount)</label>
                            </div>
                            <div className="relative z-0 w-full mb-12 group mt-10">
                                <input
                                    type="date"
                                    name="dateline"
                                    id="dateline"
                                    className="block py-3  px-3 rounded-sm w-full text-sm text-gray-700 bg-transparent  border  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#28b661] focus:outline-none focus:ring-0 focus:border-[#28b661] peer" placeholder="Dateline"
                                    required />
                                <label
                                    htmlFor="dateline"
                                    className="peer-focus:font-medium rounded-sm absolute text-lg text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 -top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#28b661] peer-focus:dark:text-[#28b661]">Dateline</label>
                            </div>
                            <div className="relative flex items-center z-0 w-full mb-12 group mt-10">
                                <input
                                    type="email"
                                    name="userEmail"
                                    id="email"
                                    defaultValue={user?.email}
                                    className="block py-3   px-3 rounded-sm w-full text-sm text-gray-700 bg-transparent  border  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#28b661] focus:outline-none focus:ring-0 focus:border-[#28b661] peer" placeholder=" Email "
                                    required />
                                <label
                                    htmlFor="email"
                                    className="peer-focus:font-medium rounded-sm absolute text-lg text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 -top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#28b661] peer-focus:dark:text-[#28b661]">Email(Who is bidding)</label>
                            </div>
                            <div className="relative flex items-center z-0 w-full mb-12 group mt-10">
                                <input
                                    type="email"
                                    name="buyerEmail"
                                    id="email"
                                    defaultValue={bidFormData?.email}
                                    className="block py-3   px-3 rounded-sm w-full text-sm text-gray-700 bg-transparent  border  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#28b661] focus:outline-none focus:ring-0 focus:border-[#28b661] peer" placeholder=" Email "
                                    required />
                                <label
                                    htmlFor="email"
                                    className={`peer-focus:font-medium rounded-sm absolute text-lg text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 -top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#28b661] peer-focus:dark:text-[#28b661]`}>Buyer Email</label>
                            </div>
                        </div>
                    </div>

                    <div className="visitedStyle">
                        <div
                            className="-mt-5 w-full">
                            {
                                user?.email === bidFormData?.email ? <button
                                    disabled
                                    type="submit"
                                    className={` opacity-80 text-whit focus:border-none flex gap-1 items-center justify-center  relative bg-[#28b661]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#28b661] dark:hover:bg-[#28b661] text-white  dark:focus:ring-[#28b661]} `}>Bid Now <span className="arrowIcon"><IoIosArrowForward /></span></button> :
                                    <button
                                        type="submit"
                                        className={`applyBtn  text-whit focus:border-none flex gap-1 items-center justify-center  relative bg-[#28b661]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#28b661] dark:hover:bg-[#28b661] text-white  dark:focus:ring-[#28b661]} `}>Bid Now <span className="arrowIcon"><IoIosArrowForward /></span></button>
                            }

                            {/* <button
                                type="submit"
                                className={`applyBtn  text-whit focus:border-none flex gap-1 items-center justify-center  relative bg-[#28b661]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#28b661] dark:hover:bg-[#28b661] text-white  dark:focus:ring-[#28b661]} `}>Bid Now <span className="arrowIcon"><IoIosArrowForward /></span></button> */}
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default BidNowForm;