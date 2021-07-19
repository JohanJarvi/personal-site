import React from "react";

import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

import Header from "./Header";

describe("Header", () => {
  it("should render the title provided as the property", () => {
    const props = {
      title: "Test Title",
    };

    let wrapper = Enzyme.shallow(<Header {...props} />);

    expect(wrapper.text()).toEqual("Test Title");
  });
});
