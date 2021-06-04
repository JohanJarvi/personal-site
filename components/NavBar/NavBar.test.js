import React from "react";

import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

import NavBar from "./NavBar";

describe("NavBar", () => {
  it("should render as many links as there are links provided correctly", () => {
    const props = {
      links: ["Home", "About", "Contact"],
    };

    let wrapper = Enzyme.shallow(<NavBar {...props} />);

    expect(wrapper.find("Link").length).toEqual(3);
  });
});
