/* global shallow, toJson */
import React from "react";
import { Navbar } from "../../containers/Navbar";

const setup = props => {
  const wrappedComponent = shallow(<Navbar {...props} />);

  return {
    props,
    wrappedComponent
  };
};

describe("Navbar", () => {
  it("should render", () => {
    const props = {};
    const { wrappedComponent } = setup(props);
    expect(toJson(wrappedComponent)).toMatchSnapshot();
  });
});
