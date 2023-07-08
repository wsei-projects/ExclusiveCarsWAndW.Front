import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/authContext";

export default function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const result = await login({ email, password });

        if (result.status === 200) {
            setEmail("");
            setPassword("");

            setTimeout(() => {
                navigate("/");
            }, 50);
        }
    };

    return (
        <div className="row justify-content-center align-items-center">
            <form className="col-md-5" onSubmit={submitHandler}>
                <h2 className="mb-4">Logowanie</h2>
                <div className="mb-3">
                    <label htmlFor="emailLabel" className="form-label">
                        Email
                    </label>
                    <input
                        id="emailLabel"
                        type="email"
                        value={email}
                        className="form-control"
                        placeholder="email"
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="passwordLabel" className="form-label">
                        Hasło
                    </label>
                    <input
                        id="passwordLabel"
                        type="password"
                        value={password}
                        className="form-control"
                        placeholder="hasło"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                        Zaloguj się
                    </button>
                    <Link to="/register">Nie masz konta? Zarejestruj się</Link>
                </div>
            </form>
        </div>
    );
}
