"use client"; // This must be a client component since it uses useSession

import Link from "next/link";
import {signOut, useSession} from "next-auth/react";
import { useEffect, useState } from "react";

export default function NavBar() {
    const { data: session, status } = useSession(); // Get session data and status
    const [userIcon, setUserIcon] = useState<string | null>(null); // For storing user icon
    const [showPopup, setShowPopup] = useState(false);


    useEffect(() => {
        if (status === "authenticated" && session?.user) {
            setUserIcon("/public/person.png");
        }
    }, [session, status]);

    const handleLogout = () => {
        signOut({callbackUrl: "/api/auth/login"})
            .then(r =>{});  // Redirect to the login page after logout
    };

    return (
        <nav className="flex justify-between items-center p-4 bg-blue-500 text-white">
            {/* Link on the left */}
            <div className="text-lg font-bold">
                <Link href="/">
                    My Blog
                </Link>
            </div>

            {/* User icon or login button on the right */}
            <div className="flex items-center space-x-4">
                {status === "authenticated" ? (
                    <>
                    <span>{session?.user?.name || "User"}</span>
                    <button
                        onClick={() => setShowPopup(!showPopup)} // Toggle popup on click
                        className="focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM12 14c-4 0-6 2-6 4v2h12v-2c0-2-2-4-6-4z"
                            />
                        </svg>
                    </button>
                    {showPopup && (
                        <div className="absolute right-0 top-12 bg-white text-black p-4 shadow-lg rounded-md">
                            <p>Are you sure you want to log out?</p>
                            <div className="flex justify-end mt-2 space-x-2">
                                <button
                                    onClick={handleLogout}
                                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700"
                                >
                                    Logout
                                </button>
                                <button
                                    onClick={() => setShowPopup(false)}
                                    className="bg-gray-300 px-3 py-1 rounded-md hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}
                    </>
                    ) : (
                    <Link href="/api/auth/login" className="text-blue-300 hover:text-blue-500">
                        Login
                    </Link>
                    )}
                    </div>
                    </nav>
                    );
                }

                // import Link from 'next/link';
                //
                // export default function NavBar() {
//     return (
//         <nav className="bg-gray-800 p-4">
//             <div className="container mx-auto flex justify-between">
//                 <div className="flex space-x-4">
//                     <Link href="/api/auth/login" className="text-white hover:text-gray-400">
//                         Login
//                     </Link>
//                     <Link href="/api/auth/logout" className="text-white hover:text-gray-400">
//                         Logout
//                     </Link>
//                     <Link href="/api/auth/register" className="text-white hover:text-gray-400">
//                         Register
//                     </Link>
//                     <Link href="/contents/add" className="text-white hover:text-gray-400">
//                         Add Blog
//                     </Link>
//                 </div>
//             </div>
//         </nav>
//     );
// }