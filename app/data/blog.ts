// Define the Blog interface
export interface Blog {
    title: string;
    content: string;
    code: string;
    language: string; // Programming language for syntax highlighting
}

// Export the blogs object
export const blogs: Record<"python" | "rust" | "go", Blog> = {
    python: {
        title: "Python Programming",
        content:
            "Python is a popular programming language known for its readability and versatility. It is widely used in web development, data science, artificial intelligence, and automation.",
        code: `
def greet(name):
    print(f"Hello, {name}!")
    
greet("World")
    `,
        language: "python",
    },
    rust: {
        title: "Rust Programming",
        content:
            "Rust is a systems programming language that guarantees memory safety and high performance. It is widely used in systems programming, embedded systems, and for building highly concurrent applications.",
        code: `
fn greet(name: &str) {
    println!("Hello, {}!", name);
}

greet("World");
    `,
        language: "rust",
    },
    go: {
        title: "Go Programming",
        content:
            "Go (Golang) is a statically typed language designed for simplicity and high performance. It is commonly used in cloud computing, distributed systems, and web development.",
        code: `
package main
import "fmt"

func greet(name string) {
    fmt.Printf("Hello, %s!\\n", name)
}

func main() {
    greet("World")
}
    `,
        language: "go",
    },
};