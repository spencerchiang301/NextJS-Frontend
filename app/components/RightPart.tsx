import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"; // You can choose different themes

interface RightPartProps {
    blogTitle: string;
    blogContent: string;
    code: string;
    language: string; // Specify the programming language for syntax highlighting
}

export default function RightPart({ blogTitle, blogContent, code, language }: RightPartProps) {
    return (
        <div className="w-3/4 p-8 bg-white shadow-lg rounded-lg mx-auto">
            {/* Blog Title */}
            <h1 className="text-4xl font-extrabold text-gray-800 mb-6">{blogTitle}</h1>

            {/* Blog Content */}
            <div className="prose prose-lg text-gray-700 leading-relaxed mb-6">
                <p>{blogContent}</p>
            </div>

            {/* Code Snippet */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Example Code:</h2>
                <SyntaxHighlighter language={language} style={tomorrow}>
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}