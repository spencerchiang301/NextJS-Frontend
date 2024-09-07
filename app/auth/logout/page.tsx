"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LOGOUT_WINDOW_TITLE } from "@/app/constants";

export default function LogoutPage() {
    const router = useRouter();

    useEffect(() => {
        // Set a timeout to redirect to the login page after 3 seconds
        const timeout = setTimeout(() => {
            router.push("/auth/login"); // Redirect to the login page
        }, 3000);

        // Clear the timeout if the component is unmounted before the 3 seconds
        return () => clearTimeout(timeout);
    }, [router]); // Add router as a dependency

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    {LOGOUT_WINDOW_TITLE}
                </h1>
                <div className="flex items-center justify-center h-32 mb-4">
                    <label className="block text-gray-700 mb-2 animate-fadeout text-center">
                        You are being logged out...
                    </label>
                </div>
            </div>
        </div>
    );
}