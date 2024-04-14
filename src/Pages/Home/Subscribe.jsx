/* eslint-disable react/no-unknown-property */
import { TfiEmail } from "react-icons/tfi";


const Subscribe = () => {
    return (
        <div className="relative w-full h-60 rounded-xl">
            <div className='relative h-full w-full rounded-xl'>
                <img src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-full h-full object-cover rounded-xl"/>
            </div>
            <div className='bg-gradient-to-r from-gray-900  to-gray-900 absolute w-full h-full opacity-80 font-roboto text-white top-0 rounded-md'>
                <div className='flex  justify-between px-10 mt-24'>
                    <div>
                        <h1 className="text-4xl text-white tracking-wider font-semibold">Subscribe to Our Newsletter!</h1>
                        <p className="tracking-wide font-normal text-xl">Subscribe to get latest updates and information.</p>
                    </div>
                    <div className="">
                        <form className="w-96 mx-auto">
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Subscribe</label>
                            <div className="relative">
                                <div className="absolute text-gray-700 inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <TfiEmail/>
                                </div>
                                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" Enter your email " required />
                                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-[#23a757] hover:bg-[#23a757] focus:ring-4 focus:outline-none focus:ring-[#23a757] font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#23a757] dark:hover:bg-[#23a757] dark:focus:[#23a757]">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;