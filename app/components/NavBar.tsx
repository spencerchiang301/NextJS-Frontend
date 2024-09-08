import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between">
                <div className="flex space-x-4">
                    <Link href="/auth/login" className="text-white hover:text-gray-400">
                        Login
                    </Link>
                    <Link href="/auth/logout" className="text-white hover:text-gray-400">
                        Logout
                    </Link>
                    <Link href="/auth/register" className="text-white hover:text-gray-400">
                        Register
                    </Link>
                    <Link href="/contents" className="text-white hover:text-gray-400">
                        Contents
                    </Link>
                    <Link href="/contents/add" className="text-white hover:text-gray-400">
                        Add Blog
                    </Link>
                </div>
            </div>
        </nav>
    );
}