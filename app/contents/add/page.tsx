"use client";

import { useState } from "react";
import {New_ARTICLE_TITLE} from "@/app/constants";

export default function NewBlogPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [code, setCode] = useState("");

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Create a new blog object
        const newBlog = {
            title,
            content: description,
            code,
        };

        // For now, we just log the data to the console
        console.log("New Blog Article Submitted:", newBlog);

        // Reset the form fields after submission
        setTitle("");
        setDescription("");
        setCode("");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                <h1 className="text-3xl font-bold mb-6">{New_ARTICLE_TITLE}</h1>

                <form onSubmit={handleSubmit}>
                    {/* Blog Title Input */}
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 mb-2">
                            Blog Title:
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter blog title"
                            required
                        />
                    </div>

                    {/* Blog Description (Content) Input */}
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700 mb-2">
                            Blog Description:
                        </label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={5}
                            placeholder="Enter blog content/description"
                            required
                        />
                    </div>

                    {/* Blog Code Snippet Input */}
                    <div className="mb-4">
                        <label htmlFor="code" className="block text-gray-700 mb-2">
                            Code Snippet:
                        </label>
                        <textarea
                            id="code"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                            rows={8}
                            placeholder="Enter your code here"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-right">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                        >
                            Submit Blog
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}