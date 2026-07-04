import "./LoginCard.css";
import { useState } from "react";
import type {LoginCredentials} from "@/types/Login";
import {authLoginUser} from "@/services/AuthUserLoginCreds.ts";

export default function LoginCard() {
    const [userCreds, setUserCreds] = useState<LoginCredentials>({
        email: "",
        password: "",
        rememberMe: false,
    });
    
    const handleSubmit = () => {
        logCredentials(userCreds);
        authLoginUser(userCreds);
    }

    const logCredentials = (creds: LoginCredentials) => {
        const logCreds = {...creds, password: "[REDACTED]"};
        console.log('This is login creds: ' + JSON.stringify(logCreds));
    }

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Grab the input that triggered onChange (e.g., username or password).
        const { name, value } = e.target;

        // Narrow the input name so TypeScript knows it matches valid text fields.
        const key = name as "email" | "password";

        // Functional update reads the latest state, then replaces only one field.
        setUserCreds((prev: LoginCredentials) => ({
            ...prev,
            [key]: value,
        }));
    }

    const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // For checkboxes, use "checked" (boolean), not "value" (string).
        const { checked } = e.target;

        // Functional update keeps username/password unchanged and updates only rememberMe.
        setUserCreds((prev: LoginCredentials) => ({
            ...prev,
            rememberMe: checked,
        }));
    }
    
    return (
        <div className="loginCard">
            <img src="/public/logos/hostd-logo.png" alt="Hostd Logo" className="loginCardLogo" />
            <h1>Login</h1>
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                <input type="email" name="email" placeholder="Email" value={userCreds.email} onChange={handleTextChange}/>
                <input type="password" name="password" placeholder="Password" value={userCreds.password} onChange={handleTextChange}/>
                <label>
                    <input type="checkbox" name="rememberMe" checked={userCreds.rememberMe} onChange={handleRememberMeChange}/> Remember Me
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}