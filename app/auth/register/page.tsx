"use client";
import "../../style/global.css";
import { REGISTER_WINDOW_TITLE } from "@/app/constants";
import { useState } from "react";

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [nameError, setNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    // Function to validate email format
    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!regex.test(email)){
            return "Email must match xxx@xxx.xxx";
        }
        return "";
    };

    // Handle email input blur (validation)
    const handleEmailBlur = () => {
        const error = validateEmail(email);
        setEmailError(error);
    };

    // Function to validate the name field (at least 6 characters)
    const validateName = (name: string) => {
        if (name.length < 6) {
            return "Name must be at least 6 characters long.";
        }
        return "";
    };

    // Function to validate password (uppercase, special character, and minimum 6 characters)
    const validatePassword = (password: string) => {
        const uppercaseRegex = /[A-Z]/;
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

        if (password.length < 6) {
            return "Password must be at least 6 characters long.";
        }
        if (!uppercaseRegex.test(password)) {
            return "Password must contain at least one uppercase letter.";
        }
        if (!specialCharRegex.test(password)) {
            return "Password must contain at least one special character.";
        }

        return "";
    };

    // Function to check if password and confirm password match
    const validatePasswordMatch = (password: string, confirmPassword: string) => {
        if (password !== confirmPassword) {
            return "Passwords do not match.";
        }
        return "";
    };

    // Handle name input blur (validation)
    const handleNameBlur = () => {
        const error = validateName(name);
        setNameError(error);
    };

    // Handle password input blur (validation)
    const handlePasswordBlur = () => {
        const error = validatePassword(password);
        setPasswordError(error);
    };

    // Handle confirm password blur (check password match)
    const handleConfirmPasswordBlur = () => {
        const error = validatePasswordMatch(password, confirmPassword);
        setConfirmPasswordError(error);
    };

    // Enable the register button only if there are no errors
    const isRegisterButtonDisabled =
        nameError !== "" ||
        passwordError !== "" ||
        confirmPasswordError !== "" ||
        name === "" ||
        password === "" ||
        confirmPassword === "";

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const nameValidationError = validateName(name);
        const passwordValidationError = validatePassword(password);
        const passwordMatchError = validatePasswordMatch(password, confirmPassword);

        if (nameValidationError || passwordValidationError || passwordMatchError) {
            setNameError(nameValidationError);
            setPasswordError(passwordValidationError);
            setConfirmPasswordError(passwordMatchError);
            return;
        }

        // Proceed with registration logic (e.g., API call)
        console.log("Registering:", { name, password });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">{REGISTER_WINDOW_TITLE}</h1>
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
                        {emailError && <p className="text-red-500 mt-2">{emailError}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 mb-2">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onBlur={handleNameBlur}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        {nameError && <p className="text-red-500 mt-2">{nameError}</p>}
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
                            onBlur={handlePasswordBlur}  // Validate password on blur
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        {passwordError && <p className="text-red-500 mt-2">{passwordError}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirm-password" className="block text-gray-700 mb-2">
                            Confirm Password:
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            onBlur={handleConfirmPasswordBlur}  // Validate password match on blur
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        {confirmPasswordError && <p className="text-red-500 mt-2">{confirmPasswordError}</p>}
                    </div>
                    <button
                        type="submit"
                        className={`w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors ${isRegisterButtonDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={isRegisterButtonDisabled}
                    >
                        Register a new user
                    </button>
                    <div className="flex justify-end mt-2">
                        <a href="/auth/login" className="text-blue-500 hover:underline">
                            login
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}