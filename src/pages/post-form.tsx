import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Car } from "../types/interfaces";
import axios from "axios";

export default function PostFormPage() {
    const { slug } = useParams();
    const [title, setTitle] = useState("");
    const [carId, setCarId] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [description, setDescription] = useState("");

    const [cars, setCars] = useState<Array<Car>>([]);

    const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            if (!slug) {
                await axios.post("/api/Posts", { carId: `${carId}`, title, imageUrl, description, longDescription: description });
                toast("Udało się dodać post :)", { type: "success" });
            } else {
                await axios.put(`/api/Posts/${slug}`, { carId, title, imageUrl, description, longDescription: description });
                toast("Udało się edytować post :)", { type: "success" });
            }
        } catch (ex: any) {
            const message = "Nie udało się zapisać zmian";
            toast(message, { type: "error" });
        }
    };

    const getPost = (id: string) => {
        axios.get(`/api/Posts/${id}`).then((response) => {
            setTitle(response.data.title);
            setCarId(response.data.carId);
            setImageUrl(response.data.imageUrl);
            setShortDescription(response.data.description);
            setDescription(response.data.longDescription);
        });
    };

    const getCars = () => {
        axios.get(`/api/Cars`).then((response) => {
            setCars(response.data);
        });
    };

    useEffect(() => {
        getCars();
        if (slug) {
            getPost(slug);
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
                        Post o samochodzie
                    </label>
                    <select value={carId} className="form-select" onChange={(e) => setCarId(e.target.value)}>
                        <option value="">Wybierz samochód</option>
                        {cars.map((car) => (
                            <option value={car.id} key={car.id}>
                                {car.brand} {car.model}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="urlLabel" className="form-label">
                        Link do zdjęcia
                    </label>
                    <textarea
                        className="form-control"
                        value={imageUrl}
                        id="urlLabel"
                        rows={2}
                        onChange={(e) => setImageUrl(e.target.value)}
                    ></textarea>
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
                        {slug ? "Edytuj" : "Dodaj"}
                    </button>
                </div>
            </form>
        </div>
    );
}
