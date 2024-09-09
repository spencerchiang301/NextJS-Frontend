import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        user: {
            id?: string;   // Add id to user type in session
            name?: string | null;
            email?: string | null;
            image?: string | null;
        };
    }

    interface User {
        id: string;  // Custom User model with an id
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id?: string;   // Custom JWT with an id
    }
}