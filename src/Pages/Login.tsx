import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const { signup } = useAuth();
    const nav = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signup(email, pw);
            nav("/");
        } catch (err) {
            alert("Failed to log in")
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                required
                value={pw}
                onChange={(e) => setPw(e.target.value)}
            />
            <button type="submit">Log In</button>
        </form>
    )
}