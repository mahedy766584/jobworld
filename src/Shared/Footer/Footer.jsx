/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import logo from "../../assets/Logo/jobBag.png"
import { FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <div>


            <footer className="bg-white dark:bg-gray-900 border-t-2 border-opacity-20 border-[#23a757]">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between  items-start">
                        <div className="mb-6 md:mb-0">
                            <div className="flex items-center">
                                {/* logo and name */}
                                <div className="flex flex-col">
                                    <div className="flex items-center">
                                        <div className="rounded-full">
                                            {/* outline-[#28b661] outline-2 outline outline-offset-2 */}
                                            <img src={logo} className="w-16" alt="Job World" />
                                            {/* border-[#28b661 ]*/}
                                        </div>
                                        <h1 className="text-4xl font-semibold text-[#23a757]">Job <span className="text-gray-700">World</span></h1>
                                    </div>
                                    <p className="w-[400px] text-justify text-gray-600 text-sm">"Job World: Search jobs, connect with employers, manage applications. Profiles for candidates and employers. Mobile-friendly, secure, with robust customer support."</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Social Links</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:text-[#23a757] text-xl duration-300"><FaFacebook/></a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline hover:text-[#23a757] text-xl duration-300"><FaTwitter/></a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline hover:text-[#23a757] text-xl duration-300"><FaInstagramSquare/></a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline ">Github</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">YouTube</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between absolute text-center left-[45%]">
                        <p className="text-sm text-gray-500 text-center sm:text-center dark:text-gray-400  flex  justify-center items-center">© 2024 <a href="#" className="hover:underline text-center">Job World</a>. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;