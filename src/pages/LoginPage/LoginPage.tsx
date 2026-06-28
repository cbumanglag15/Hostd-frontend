export default function LoginPage() {
    return (
        <div className="login-page">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <label>
                    <input type="checkbox" /> Remember Me
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
