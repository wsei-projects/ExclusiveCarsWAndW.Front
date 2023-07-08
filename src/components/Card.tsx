import { Car } from "../types/interfaces";

export default function Card({ car }: { car: Car }) {
  const classCar = ["Luxury", "Economy", "SUV", "Sports"];

  return (
    <div className="card w-100 mb-4">
      <img src={car.imageUrl} alt={car.brand} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">
          {car.brand} {car.model}
        </h5>
        <p className="card-text mb-1">{classCar[car.class]}</p>
        <p className="card-text mb-1">Rocznik: {car.year}</p>
        <p className="card-text mb-2">Cena wynajmu (na jeden dzień): {car.pricePerDay}zł</p>
        <p className="card-text mb-2">{car.description}</p>
        <a href="#" className="btn btn-primary w-100">
          Wynajmij
        </a>
      </div>
    </div>
  );
}
