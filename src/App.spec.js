import React from "react";
import { shallow } from "enzyme";
import List from "./components/list";
import App from "./App";
import "./setupTests";

describe("List", () => {
  const wrapper = shallow(<App />);
  it("should renders List component ", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should render List Component", () => {
    expect(wrapper.find(List).length).toBe(1);
  });
});
