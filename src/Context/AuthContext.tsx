import { createContext, use, useContext, useEffect, useState } from "react";
import {
    User,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from '../Context/FirebaseConfig';
import { AuthConTextType } from "../Types/Interfaces/AuthConTextType";


const AuthContext = createContext<AuthConTextType | undefined>(undefined);

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return unsub;
    }, []);

    const signup = async (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password).then(() => {})
    }

    const login = async (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password).then(() => {})
    }

    const logout = async () => signOut(auth);

    return (
        <AuthContext.Provider value={{ user, signup, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const ctx = useContext(AuthContext);
        if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
        return ctx;
}
