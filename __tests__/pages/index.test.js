import React from "react";

import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

import Home from "../../pages/index";

describe("home", () => {
  it("should render a navbar component", () => {
    let wrapper = Enzyme.shallow(<Home />);

    expect(wrapper.find("NavBar").length).toEqual(1);
  });
});
