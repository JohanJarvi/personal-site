import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Home from "../../pages/index";

describe("home", () => {
  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  it("should render a navbar component", () => {
    act(() => {
      render(<Home />, container);
    });

    expect(container.querySelectorAll("NavBar").length).toEqual(1);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
});
