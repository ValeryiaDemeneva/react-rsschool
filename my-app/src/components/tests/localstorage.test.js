
describe("Mock local storage", () => {
  const onInputChange = (key, eventValue) => {
    window.localStorage.setItem(key, JSON.stringify(eventValue));
  };
  test("Local storage must set new item", () => {
    const key = "searchValue";
    const eventTargetValue = { key: "fsdfsdfsdf" };
    onInputChange(key, eventTargetValue);
    expect(localStorage.getItem(key)).toEqual(JSON.stringify(eventTargetValue));
  });

  test("Local storage must return null", () => {
    const key = "searchValue";
    const eventTargetValue = { key: "json data" };
    const newKey = "fwefw";
    onInputChange(key, eventTargetValue);
    expect(localStorage.getItem(newKey)).toBeNull();
  });
});
