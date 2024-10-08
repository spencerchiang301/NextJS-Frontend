"use client"
import {useState} from "react";
import "../../../style/global.css";
import {BASE_URL, LOGIN_URL, LOGIN_WINDOW_TITLE} from "@/app/constants";
import {signIn} from "next-auth/react";
import { useRouter } from 'next/navigation';



export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // To handle loading state
    const router = useRouter();



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
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Check if email is valid before submitting
        if (!validateEmail(email)) {
            setError('Invalid email format');
            return;
        }

        // Reset error if email is valid
        setError('');
        setLoading(true);

        // const loginData = {
        //     email: email,
        //     password: password,
        // };

        const res = await signIn('credentials', {
            redirect: false,
            email,
            password,
        });

        if (res?.error) {
            setError('Invalid email or password');
        } else {
            // Redirect user after successful login
            window.location.href = '/contents';
            // await router.push('/contents'); // redirect to your protected page
        }

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
                    <div className="flex justify-end mt-2">
                        <a href="/api/auth/register" className="text-blue-500 hover:underline">
                            Register
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}