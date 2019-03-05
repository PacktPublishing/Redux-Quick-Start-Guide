import React from "react";
import renderer from "react-test-renderer";
import Header from "../Header";

jest.mock("react-router-dom/Link", () => "Link");

it("should render correctly", () => {
  const component = renderer.create(<Header />);
  expect(component.toJSON()).toMatchSnapshot();
});
