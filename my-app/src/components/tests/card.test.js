import React from "react";
import { render, screen } from "@testing-library/react";

const Card = (props) => {
  return (
    <div className="card-conteiner">
      <img src={props.image} />
      <div className="card-information">
        <h3 className="card-title">{props.name}</h3>
        <h4 className="card-location">{props.location}</h4>
        <p className="card-square">{props.square}</p>
        <p className="card-rooms">{props.rooms}</p>
        <p className="card-price">{props.price}</p>
      </div>
    </div>
  );
};

describe("Mock local storage", () => {
  test("re-rendering the same component with different props does not remount", () => {
    const props = {
      image: "l",
      name: "Studio",
      location: "Warszawa",
      square: "50m2",
      rooms: "One-room",
      price: "80000$",
    };
    render(<Card props={props} />);
    expect(screen.getByText("Studio")).toBeInTheDocument();
  });
});
