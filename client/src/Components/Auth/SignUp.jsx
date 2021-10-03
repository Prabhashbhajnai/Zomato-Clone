import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import {FcGoogle} from 'react-icons/fc';
import { useDispatch } from 'react-redux';

// redux action
import { signUp } from '../../Redux/Reducer/Auth/Auth.action';

export default function SignUp({ isOpen, setIsOpen }) {
    const [userData, setUserData] = useState({
        fullname: "",
        email: "",
        password: "",
    });

    const dispatch = useDispatch();

    const handleChange = (e) =>
        setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));

    function closeModal() {
        setIsOpen(false)
    }

    const submit = () => {
        setUserData({
            fullname: "",
            email: "",
            password: "",
        });
        dispatch(signUp(userData))
    };

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Sign Up
                                </Dialog.Title>
                                <div className="mt-2 flex flex-col gap-3 w-full">
                                    <button className="py-2 justify-center rounded-lg flex items-center gap-3 w-full border border-gray-400 bg-white text-gray-700 hover:bg-gray-100">
                                        <FcGoogle className="w-8 h-8" /> Continue with Google 
                                    </button>

                                    <form className="flex flex-col gap-3">
                                        <div className="w-full flex flex-col gap-2">
                                            <label htmlFor="fullname">Fullname</label>
                                            <input 
                                                type="text"    
                                                id="fullname" 
                                                onChange={handleChange}
                                                placeholder="John Doe" 
                                                value={userData.fullname}
                                                className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-zomato-400"
                                            />
                                        </div>
                                        <div className="w-full flex flex-col gap-2">
                                            <label htmlFor="email">email</label>
                                            <input 
                                                type="email"    
                                                id="email" 
                                                onChange={handleChange}
                                                value={userData.email}
                                                placeholder="email@email.com" 
                                                className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-zomato-400"
                                            />
                                        </div>
                                        <div className="w-full flex flex-col gap-2">
                                            <label htmlFor="password">password</label>
                                            <input 
                                                type="password"    
                                                id="password" 
                                                placeholder="********" 
                                                onChange={handleChange}
                                                value={userData.password}
                                                className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-zomato-400"
                                            />
                                        </div>
                                        <div onClick={submit} className="w-full text-center bg-zomato-400 text-white py-2 rounded-lg">
                                            Sign Up
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
