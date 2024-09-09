"use client";
import {useEffect, useState} from "react";
import {SessionProvider, useSession} from 'next-auth/react';
import LeftPart from "../components/LeftPart";
import RightPart from "../components/RightPart";
import {blogs} from "@/app/data/blog";

export default function MainContentPage() {
    const [selectedCategory, setSelectedCategory] = useState<"python" | "rust" | "go">("python");
    const { data: session, status } = useSession();

    useEffect(() => {
        console.log("Status:", status); // Log status to check its value
        console.log("Session:", session); // Log session to check if session data is available
    }, [status, session]);

    if (status === "loading") {
        return <p>Loading...</p>; // Show a loading state while session is being fetched
    }

    if (status === "authenticated") {
        console.log("authenticated");
        console.log(session?.user?.name);
    }

    const handleCategorySelect = (category: string) => {
        if (category in blogs) {
            setSelectedCategory(category as "python" | "rust" | "go");
        }
    };

    return (
        <SessionProvider>
            <div className="flex min-h-screen bg-gray-100">
                {/* Left part */}
                <LeftPart
                    categories={Object.keys(blogs) as Array<"python" | "rust" | "go">}
                    selectedCategory={selectedCategory}
                    onCategorySelect={handleCategorySelect}
                />

                {/* Right part */}
                <RightPart
                    blogTitle={blogs[selectedCategory].title}
                    blogContent={blogs[selectedCategory].content}
                    code={blogs[selectedCategory].code}
                    language={blogs[selectedCategory].language}
                />
            </div>
        </SessionProvider>
    );
}