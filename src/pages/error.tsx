import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <h2 className="mb-3">Error 404</h2>
      <Link to="/">Wróć do strony głównej</Link>
    </div>
  );
}
