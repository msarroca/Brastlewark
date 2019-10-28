import React from "react";
import { shallow } from "enzyme";
import ResultsPanel from "./index";
import "../../setupTests";
import DetailPanel from "../details";

describe("Results Panel", () => {
  const dummyProps = {
    character: {
      name: "name1",
      age: 23,
      hair_color: "red",
      height: 234,
      thumbnail: "https://image.es"
    }
  };

  const wrapper = shallow(<ResultsPanel {...dummyProps} />);

  it("renders ResultsPanel Component", () => {
    expect(wrapper).toBeTruthy();
  });
  it("should be selecteable by classname c-results", () => {
    expect(wrapper.find(".c-list").length).toBe(1);
  });
  it("should be disable detail panel when showDetails is true", () => {
    expect(wrapper.find(DetailPanel).length).toBe(0);
  });
  it("should be a button", () => {
    expect(wrapper.find("button").length).toBe(1);
  });
});
