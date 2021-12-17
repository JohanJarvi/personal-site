import React from "react";

import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

import PageTitle from "./PageTitle";

describe("PageTitle", () => {
  it("should render the title provided as the property", () => {
    const props = {
      title: "Test Title",
    };

    let wrapper = Enzyme.shallow(<PageTitle {...props} />);

    expect(wrapper.text()).toEqual("Test Title");
  });
});
