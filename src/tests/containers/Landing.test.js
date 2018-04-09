/* global shallow, toJson */
import React from "react";
import { Landing } from "../../containers/Landing";

const setup = props => {
  const wrappedComponent = shallow(<Landing {...props} />);

  return {
    props,
    wrappedComponent
  };
};

describe("Landing", () => {
  it("should render", () => {
    const props = {};
    const { wrappedComponent } = setup(props);
    expect(toJson(wrappedComponent)).toMatchSnapshot();
  });
});
