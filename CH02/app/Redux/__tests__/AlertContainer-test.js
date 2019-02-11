import React from "react";
import renderer from "react-test-renderer";
import AlertContainer from "../AlertContainer";

jest.mock("react-redux", () => ({
  connect: () => obj => obj
}));

jest.mock("../Alerts", () => "Alerts");

it("should render correctly", () => {
  const dispatch = jest.fn();
  const component = renderer.create(<AlertContainer dispatch={dispatch} />);
  expect(component.toJSON()).toMatchSnapshot();

  expect(dispatch).toHaveBeenCalled();
  expect(dispatch.mock.calls).toMatchSnapshot(
    "dispatch function was called correctly"
  );
});
