import React from "react";
import renderer from "react-test-renderer";

import HeaderNav from "../HeaderNav";

jest.mock("react-router-dom/Link", () => "Link");
jest.mock("../Header", () => "Header");
jest.mock("../SocialMediaLinks", () => "SocialMediaLinks");
jest.mock("../Logo", () => "Logo");

it("should render correctly", () => {
  const component = renderer.create(<HeaderNav />);
  expect(component.toJSON()).toMatchSnapshot();
});
