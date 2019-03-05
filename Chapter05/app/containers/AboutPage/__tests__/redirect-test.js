import React from "react";
import renderer from "react-test-renderer";
import RedirectDemo from "../redirect";

jest.mock("react-router-dom", () => ({ Redirect: "Redirect", Route: "Route" }));

it("should render correctly", () => {
  const component = renderer.create(<RedirectDemo />);
  expect(component.toJSON()).toMatchSnapshot();
});
