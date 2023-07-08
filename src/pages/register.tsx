import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="row justify-content-center align-items-center">
      <form className="col-md-5">
        <h2 className="mb-4">Rejestracja</h2>
        <div className="mb-3">
          <label htmlFor="emailLabel" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            autoComplete="email"
            id="emailLabel"
            placeholder="email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="passwordLabel" className="form-label">
            Hasło
          </label>
          <input
            type="password"
            className="form-control"
            autoComplete="new-password"
            id="passwordLabel"
            placeholder="hasło"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="repeatPasswordLabel" className="form-label">
            Powtórz hasło
          </label>
          <input
            id="repeatPasswordLabel"
            type="password"
            autoComplete="new-password"
            className="form-control"
            placeholder="powtórz hasło"
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
