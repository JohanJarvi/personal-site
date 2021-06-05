import React from "react";

import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

import Blurb from "./Blurb";

describe("Header", () => {
  it("should render the title provided as the property", () => {
    const props = {
      content: "Some test content here.",
    };

    let wrapper = Enzyme.shallow(<Blurb {...props} />);

    expect(wrapper.text()).toEqual("Some test content here.");
  });
});
