import { User } from "firebase/auth";

export interface AuthConTextType {
    user: User | null;
    signup: (email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}