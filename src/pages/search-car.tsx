import { useState, useEffect } from "react";
import Card from "../components/Card";
import { Car } from "../types/interfaces";

export default function SearchCarPage() {
    const [cars, setCars] = useState<Array<Car>>([]);

    useEffect(() => {
        fetch("https://localhost:7014/api/cars")
            .then((response) => response.json())
            .then((result) => {
                setCars(result.result);
            });
    }, []);

    return (
        <section className="row">
            <h2 className="mb-4">Znajdź swój wymarzony samochód</h2>
            {cars.map((car) => (
                <div key={car.id} className="col-xl-3 col-lg-4 col-md-6 col-12">
                    <Card car={car} />
                </div>
            ))}
        </section>
    );
}
