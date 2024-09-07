"use client"; // To make this a Client Component

import { useState } from "react";
import LeftPart from "../components/LeftPart";
import RightPart from "../components/RightPart";
import {blogs} from "@/app/data/blog";

export default function MainContentPage() {
    const [selectedCategory, setSelectedCategory] = useState<"python" | "rust" | "go">("python");

    const handleCategorySelect = (category: string) => {
        if (category in blogs) {
            setSelectedCategory(category as "python" | "rust" | "go");
        }
    };

    return (
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
    );
}