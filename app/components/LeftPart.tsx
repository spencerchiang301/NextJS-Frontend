// components/LeftPart.tsx

interface LeftPartProps {
    categories: Array<"python" | "rust" | "go">;
    selectedCategory: "python" | "rust" | "go";
    onCategorySelect: (category: "python" | "rust" | "go") => void;
}

export default function LeftPart({
                                     categories,
                                     selectedCategory,
                                     onCategorySelect,
                                 }: LeftPartProps) {
    return (
        <div className="w-1/4 bg-white p-4 shadow-lg">
            <ul>
                {categories.map((category) => (
                    <li
                        key={category}
                        onClick={() => onCategorySelect(category)}
                        className={`cursor-pointer p-2 mb-2 rounded-lg hover:bg-blue-100 ${
                            selectedCategory === category ? "bg-blue-500 text-white" : ""
                        }`}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </li>
                ))}
            </ul>
        </div>
    );
}