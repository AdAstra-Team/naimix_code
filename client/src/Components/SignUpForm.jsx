import React, { useState } from "react";
import bcrypt from "bcryptjs";
import { setAuth } from "../redux/Slices/UserSlice";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Предотвращаем перезагрузку страницы
        setLoading(true);
        setError(null);

        try {
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(password, salt);

            const response = await fetch("ссылка на апи", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    "username": username, 
                    "password": hashedPassword,
                    "email": email,
                }),
            });

            if (!response.ok) {
                throw new Error("Ошибка регистрации");
            }

            const data = await response.json();
            // Здесь вы можете сохранить токен или выполнить другие действия
            navigate("/SignInUpPage/#login");
            console.log("Успешный вход:", data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-md">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-2xl mb-4">Sign Up</h2>
                    {error && <p className="text-red-500 text-xs italic">{error}</p>}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm  mb-2" htmlFor="username">
                           * Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="username" 
                        type="text" 
                        placeholder="Username" 
                        value={username}
                        onChange={e => setUsername(e.target.value)}/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm  mb-2" htmlFor="email">
                           * Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="email" 
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm  mb-2" htmlFor="password">
                           * Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="password" 
                        type="password" 
                        value={password}
                        placeholder="******************" 
                        onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-green-500 hover:bg-green-700  py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleSubmit} type="button">
                            Sign Up
                        </button>
                        <a href="/SignInUpPage/#login" className="px-4 py-2 rounded">
                            Login
                        </a>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default SignUpForm;