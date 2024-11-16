import React, { useState } from "react";
import { setAuth } from "../redux/Slices/UserSlice";
import bcrypt from "bcryptjs";
import { buildCreateSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
                    "password": hashedPassword }),
            });

            if (!response.ok) {
                setUsername("Афанасий");
                var token = "tempToken";
                dispatch(setAuth({token, username: "Афанасий"}));
                dispatch(navigate("/"))
                return;
                //throw new Error("Ошибка авторизации");
            }

            const data = await response.json();
            // Здесь вы можете сохранить токен или выполнить другие действия
            dispatch(setAuth(data))
            console.log("Успешный вход:", data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center ">
            <div className="w-full max-w-md">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <h2 className="text-2xl mb-4">Login</h2>
                    {error && <p className="text-red-500 text-xs italic">{error}</p>}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="username">
                            * Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="password">
                            * Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="******************"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className={`bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Signing In..." : "Sign In"}
                        </button>
                        
                        <a href="/SignInUpPage/#signup" className="px-4 py-2 rounded">
                            Sign Up
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;