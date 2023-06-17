import { Car } from "../types/interfaces";

export default function Card({ car }: { car: Car }) {
  return (
    <div className="card w-100 mb-4">
      <img src={car.image} alt={car.brand} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">
          {car.brand} {car.model}
        </h5>
        <p className="card-text mb-1">Rocznik: {car.year}</p>
        <p className="card-text mb-2">Cena wynajmu: {car.price}zł</p>
        <p className="card-text">{car.description}</p>
        <a href="#" className="btn btn-primary w-100">
          Wynajmij
        </a>
      </div>
    </div>
  );
}
