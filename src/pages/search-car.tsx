import { useState, useEffect } from "react";
import Card from "../components/Card";
import { Car } from "../types/interfaces";

export default function SearchCarPage() {
  const [cars, setCars] = useState<Array<Car>>([]);

  useEffect(() => {
    const result: Array<Car> = [
      {
        id: 1,
        brand: "Audi",
        model: "A4",
        year: 2018,
        price: 1000,
        image:
          "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc",
      },
      {
        id: 2,
        brand: "BMW",
        model: "M3",
        year: 2019,
        price: 1500,
        image:
          "https://images.unsplash.com/photo-1549927681-0b673b8243ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc",
      },
      {
        id: 3,
        brand: "Mercedes",
        model: "AMG",
        year: 2020,
        price: 2000,
        image: "https://images.unsplash.com/photo-1549927681-0b673b8243ab",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc",
      },
      {
        id: 4,
        brand: "Audi",
        model: "A2",
        year: 2018,
        price: 1000,
        image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc",
      },
      {
        id: 5,
        brand: "Audi",
        model: "A2",
        year: 2018,
        price: 1000,
        image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc",
      },
      {
        id: 6,
        brand: "Audi",
        model: "A2",
        year: 2018,
        price: 1000,
        image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc",
      },
    ];

    setCars(result);
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
