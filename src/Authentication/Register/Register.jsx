import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo/job-search (1).png"
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";


const Register = () => {

    const [name, changeName] = useState('');
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');
    const [photoURL, changePhotoURL] = useState('');
    const [showPass, setShowPass] = useState(false);

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const accepted = e.target.terms.checked;
        const userData = { name, email, password, photoURL, accepted };
        console.log(userData)

        const toastId = toast.loading('Logging In')

        if(!password.length === 6){
            toast.error( "Your password must be six characters!", { id: toastId });
            return;
        }else if(!/[!@#$%^&*/]/.test(password)){
            toast.error( "Your password must be any special characters!", { id: toastId });
            return;
        }else if((!/[0-1]/.test(password))){
            toast.error( "Your password must be any number!", { id: toastId });
            return;
        }else if (!/[A-Z]/.test(password)){
            toast.error( "Your password must be any capital letter!", { id: toastId });
            return;
        }else if(!accepted){
            toast.error( "Pleas Accept Our Terms & Condition!", { id: toastId });
            return;
        }


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)

                updateProfile(user, {
                    displayName: name,
                    photoURL: photoURL,
                })

                toast.success('Successfully Account Created!', { id: toastId });
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
                toast.error(error.message, { id: toastId });
            })

    }

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="flex items-center gap-2 p-2">
                        {/* logo and name */}
                        <div className="rounded-full  outline-[#28b661] outline-2 outline outline-offset-2">
                            <img src={logo} className="w-16" alt="Job World" />
                            {/* border-[#28b661 */}
                        </div>
                        <h1 className="text-4xl font-semibold text-[#23a757]">World</h1>
                    </div>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create and account
                            </h1>
                            <form className="space-y-4 md:space-y-6"
                                onSubmit={handleRegister}
                            >
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                    <input
                                        onBlur={e => changeName(e.target.value)}
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="your name"
                                        required=""
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input
                                        onBlur={e => changeEmail(e.target.value)}
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@company.com"
                                        required="" />
                                </div>
                                <div className="">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <div className="relative flex items-center">
                                        <input
                                            onBlur={e => changePassword(e.target.value)}
                                            type={showPass ? 'text' : 'password'}
                                            name="password"
                                            id="password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 relative border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                            <p className="absolute right-2 cursor-pointer"
                                            onClick={() => setShowPass(!showPass)}
                                            >
                                                {showPass? <FaRegEyeSlash/> : <FaRegEye/>}
                                            </p>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                                    <input
                                        onBlur={e => changePhotoURL(e.target.value)}
                                        type="photo"
                                        name="photo"
                                        id="photo"
                                        placeholder="photo URL"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required="" />
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="terms"
                                            aria-describedby="terms"
                                            type="checkbox"
                                            name="terms"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                            required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-[#23a757] hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-[#23a757] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Register;