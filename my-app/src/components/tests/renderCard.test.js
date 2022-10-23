import React from "react";
import { render, screen } from "@testing-library/react";

const Card = (props) => {
  const {
    switcherValue,
    nameInputValue,
    locationValue,
    squareInputValue,
    priceInputValue,
    dateInputValue,
    fileInputValue,
  } = props;
  return (
    <div className="card-conteiner">
      <img className="card-image" src={fileInputValue} alt="ff" />
      <div className="card-information">
        <h3 className="card-title">{nameInputValue}</h3>
        <h4 className="card-location">{locationValue}</h4>
        <p className="card-square">{squareInputValue}</p>
        <p className="card-price">{priceInputValue}</p>
        <p className="card-rent-sell">{switcherValue ? "sell" : "rent"}</p>
        <p className="card-date">{dateInputValue}</p>
      </div>
    </div>
  );
};

describe("Mock local storage", () => {
  test("re-rendering the same component with different props does not remount", () => {
    const props = {
      switcherValue: "true",
      nameInputValue: "Flat",
      locationValue: "Warsaw",
      squareInputValue: "50m2",
      priceInputValue: "10000$",
      dateInputValue: "05.03.2022",
      fileInputValue: "./rkrkkkr",
    };
    render(<Card props={props} />);
    expect(screen.getByText("rent")).toBeInTheDocument();
  });
});
