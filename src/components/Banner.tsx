import { useNavigate } from "react-router-dom";

export default function Banner() {
    const navigate = useNavigate();

    return (
        <section className="banner position-relative">
            <div className="position-absolute text-center top-50 start-50 translate-middle w-75">
                <h2 className="text-uppercase text-white">Odkryj Moc Ekskluzywnych Aut na</h2>
                <h1 className="text-primary">Exlusive Cars W&W</h1>
                <button type="button" className="btn btn-primary" onClick={() => navigate("/blog")}>
                    Przejdź na bloga
                </button>
            </div>
        </section>
    );
}
