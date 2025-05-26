import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const { login } = useAuth();
    const nav = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(email, pw);
            nav("/");
        } catch (err) {
            alert("Failed to sign up")
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form
                className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm"
                onSubmit={handleSubmit}>
                <h2 className="text-2xl front-semibold mb-6 text-center">Login</h2>
                <label className="block mb-2">
                    <span className="text-gray-700">Email</span>
                    <input
                        type="email"
                        className="mt-1 block w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Password</span>
                    <input
                        type="password"
                        required
                        value={pw}
                        onChange={(e) => setPw(e.target.value)}
                        className="mt-1 block w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="••••••••"
                    />
                </label>
                <button
                type="submit"
                className="w-full py-2 rounded-lg bg-indigo-50 text-white font-medium hover:bg-indigo-700 transition"
                >Log In</button>
            </form>
        </div>
    )
}