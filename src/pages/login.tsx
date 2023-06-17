import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="row justify-content-center align-items-center">
      <form className="col-md-5">
        <h2 className="mb-4">Logowanie</h2>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Hasło
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="t@3salwo31s"
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
