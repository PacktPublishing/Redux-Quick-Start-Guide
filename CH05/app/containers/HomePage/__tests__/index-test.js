import React from "react";
import renderer from "react-test-renderer";
import HomePage from "../index";

jest.mock("react-router-dom", () => ({
  Link: "Link",
  Route: ({ children, path }) => children({ match: path === "/link-path" })
}));

it("should render correctly", () => {
  const component = renderer.create(<HomePage />);
  expect(component.toJSON()).toMatchSnapshot();
});
