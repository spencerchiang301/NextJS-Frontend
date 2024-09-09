"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LOGOUT_WINDOW_TITLE } from "@/app/constants";
import { signOut } from "next-auth/react";

export default function LogoutPage() {
    const router = useRouter();

    useEffect(() => {
        signOut({
            callbackUrl: "/api/auth/login",
        }).then(r => {});
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