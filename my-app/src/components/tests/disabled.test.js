import React from "react";
import { render, screen } from "@testing-library/react";

describe("Mock local storage", () => {
  const onDisabledButton = (state) => {
    if (
      state.dateInputValue ||
      state.nameInputValue ||
      state.squareInputValue ||
      state.fileInputValue
    ) {
      return true;
    } else {
      return false;
    }
  };

  const state1 = {
    nameInputValue: "as",
    squareInputValue: "ad",
    dateInputValue: "",
    fileInputValue: "",
  };
  const state2 = {
    nameInputValue: "",
    squareInputValue: "",
    dateInputValue: "",
    fileInputValue: "",
  };

  test("Local storage must set new item", () => {
    // const test1 = onDisabledButton(state1);
    expect(onDisabledButton(state1)).toBe(true);
  });
  test("Local storage must return null", () => {
    // const test2 = onDisabledButton(state2);
    expect(onDisabledButton(state2)).toBe(false);
  });
});

