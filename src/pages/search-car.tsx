import { useState, useEffect } from "react";
import Card from "../components/Card";
import { Car } from "../types/interfaces";
import axios from "axios";

export default function SearchCarPage() {
    const [cars, setCars] = useState<Array<Car>>([]);

    useEffect(() => {
        axios.get(`/api/Car`).then((response) => {
            setCars(response.data);
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
