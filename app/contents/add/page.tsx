"use client";

import { useState } from "react";
import {ADD_ARTICLES_URL, BASE_URL, New_ARTICLE_TITLE} from "@/app/constants";

const baseURL = BASE_URL;
const addPostURL = ADD_ARTICLES_URL;

export default function NewBlogPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Reset error and success states
        setError("");
        setSuccess(false);
        setLoading(true);

        // Create a new blog object
        const newBlog = {
            title,
            content: description,
            code,
        };


        try {

            // Send a POST request to the server
            const response = await fetch(baseURL+"/"+addPostURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newBlog),
            });

            if (response.ok) {
                setSuccess(true);
                console.log("Blog submitted successfully:", await response.json());

                setTitle("");
                setDescription("");
                setCode("");
            } else {
                const errorData = await response.json();
                setError(`Failed to submit blog: ${errorData.message}`);
                console.error("Error submitting blog:", errorData);
            }
        } catch (error) {
            setError("An error occurred while submitting the blog.");
            console.error("Error submitting blog:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                <h1 className="text-3xl font-bold mb-6">{New_ARTICLE_TITLE}</h1>

                {success && (
                    <div className="mb-4 text-green-600 font-bold">
                        Blog submitted successfully!
                    </div>
                )}

                {error && (
                    <div className="mb-4 text-red-600 font-bold">{error}</div>
                )}

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
                            className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors ${
                                loading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                            disabled={loading}
                        >
                            {loading ? "Submitting..." : "Submit Blog"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}