import { Link } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log("submit", email, password);
        // const email = (document.getElementById("emailLabel") as HTMLInputElement).value;
        // const password = (document.getElementById("password
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
                        placeholder="name@example.com"
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
                        placeholder="t@3salwo31s"
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
