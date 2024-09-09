"use client";
import {useEffect, useState} from "react";
import {SessionProvider, useSession} from 'next-auth/react';
import LeftPart from "../components/LeftPart";
import RightPart from "../components/RightPart";
import {blogs} from "@/app/data/blog";
import {useRouter} from "next/navigation";

export default function MainContentPage() {
    const [selectedCategory, setSelectedCategory] = useState<"python" | "rust" | "go">("python");
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        // If the session status is "unauthenticated", redirect to login
        if (status === "unauthenticated") {
            router.push("/api/auth/login");
        }
    }, [status, router]);

    if (status === "loading") {
        return <p>Loading...</p>; // Show a loading state while session is being fetched
    }

    if (status === "authenticated") {


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

    return null;
}