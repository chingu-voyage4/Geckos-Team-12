import React from "react";
import { Landing } from "../../containers/Landing";

const setup = props => {
  const wrappedComponent = mount(<Landing {...props} />);

  return {
    props,
    wrappedComponent
  };
};

describe("components", () => {
  describe("Landing", () => {
    it("should render while authenticated", () => {
      const props = {
        auth: true
      };
      const { wrappedComponent } = setup(props);
      // expect(wrappedComponent.find("header").hasClass("header")).toBe(true);
      expect(wrappedComponent.find("p").text()).toBe("Welcome Grower");
    });
    it("should render while not authenticated", () => {
      const props = {
        auth: false
      };
      const { wrappedComponent } = setup(props);
      // expect(wrappedComponent.find("header").hasClass("header")).toBe(true);
      expect(wrappedComponent.find("p").text()).toBe("Welcome futur Grower");
    });
  });
});
