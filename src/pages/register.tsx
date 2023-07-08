import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/authContext";

export default function RegisterPage() {
  const { register } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const result = await register({ email, password, confirmPassword });

        if (result.status === 200) {
            setEmail("");
            setPassword("");
            setConfirmPassword("");

            setTimeout(() => {
                navigate("/login");
            }, 50);
        }
    };

    return (
        <div className="row justify-content-center align-items-center">
            <form className="col-md-5" onSubmit={submitHandler}>
                <h2 className="mb-4">Rejestracja</h2>
                <div className="mb-3">
                    <label htmlFor="emailLabel" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        autoComplete="email"
                        id="emailLabel"
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="passwordLabel" className="form-label">
                        Hasło
                    </label>
                    <input
                        type="password"
                        value={password}
                        className="form-control"
                        autoComplete="new-password"
                        id="passwordLabel"
                        placeholder="hasło"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="repeatPasswordLabel" className="form-label">
                        Powtórz hasło
                    </label>
                    <input
                        id="repeatPasswordLabel"
                        type="password"
                        value={confirmPassword}
                        autoComplete="new-password"
                        className="form-control"
                        placeholder="powtórz hasło"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                        Zarejstruj
                    </button>
                    <Link to="/login">Masz już konto? Zaloguj się</Link>
                </div>
            </form>
        </div>
    );
}
