import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostFormPage() {
    const { slug } = useParams();
    const [title, setTitle] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    useEffect(() => {
        if (slug) {
            // getPost(slug);
        }
    }, []);

    return (
        <div className="row justify-content-center align-items-center">
            <form className="col-md-5" onSubmit={submitHandler}>
                <h2 className="mb-4">{slug ? "Edycja posta" : "Dodawanie posta"}</h2>
                <div className="mb-3">
                    <label htmlFor="titleLabel" className="form-label">
                        Tytuł
                    </label>
                    <input
                        id="titleLabel"
                        type="text"
                        value={title}
                        className="form-control"
                        placeholder="tytuł"
                        autoComplete="email"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="titleLabel" className="form-label">
                        Krótki opis
                    </label>
                    <textarea
                        className="form-control"
                        value={shortDescription}
                        id="descriptionLabel"
                        rows={3}
                        onChange={(e) => setShortDescription(e.target.value)}
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="descriptionLabel" className="form-label">
                        Opis
                    </label>
                    <textarea
                        className="form-control"
                        value={description}
                        id="descriptionLabel"
                        rows={7}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>

                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                        {slug ? 'Edytuj' : 'Dodaj'}
                    </button>
                </div>
            </form>
        </div>
    );
}
