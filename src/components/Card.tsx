import { Car } from "../types/interfaces";

export default function Card({ car }: { car: Car }) {
  return (
    <div className="card w-100 mb-4">
      <img src={'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80'} alt={car.brand} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">
          {car.brand} {car.model}
        </h5>
        <p className="card-text mb-1">Rocznik: {car.year}</p>
        <p className="card-text mb-2">Cena wynajmu (na jeden dzień): {car.pricePerDay}zł</p>
        <a href="#" className="btn btn-primary w-100">
          Wynajmij
        </a>
      </div>
    </div>
  );
}
