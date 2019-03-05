import React from "react";
import renderer from "react-test-renderer";

import EmailInput from "../EmailInput";

it("should render correctly", () => {
  const component = renderer.create(<EmailInput />);
  expect(component.toJSON()).toMatchSnapshot();

  const instance = component.getInstance();
  expect(instance.state).toMatchSnapshot("initial state");

  instance.handleEmailChange({ target: { value: "skmu@hvl.no" } });
  expect(instance.state).toMatchSnapshot("updated state");
});
