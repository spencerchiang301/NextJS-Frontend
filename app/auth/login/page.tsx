"use client"
import {useState} from "react";
import "../../style/global.css";
import {LOGIN_WINDOW_TITLE} from "@/app/constants";


export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Function to validate email format
    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Handle form submission
    const handleEmailBlur = () => {
        if (!validateEmail(email)) {
            setError('Invalid email format');
        } else {
            setError(''); // Clear the error if the email is valid
        }
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Check if email is valid before submitting
        if (!validateEmail(email)) {
            setError('Invalid email format');
            return;
        }

        // Reset error if email is valid
        setError('');

        // Proceed with login logic (e.g., call an API)
        console.log('Logging in:', { email, password });
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-center">{LOGIN_WINDOW_TITLE}</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={handleEmailBlur}  // Check email when losing focus
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 mb-2">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}