import React from "react";
import { shallow } from "enzyme";
import ResultsPanel from "./index";
import "../../setupTests";
import Detail from "../details";

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
  it("should be selecteable by classname card-list", () => {
    expect(wrapper.find(".card-list").length).toBe(1);
  });
  it("should be selecteable by classname card-list--details", () => {
    expect(wrapper.find(".card-list--details").length).toBe(1);
  });
  it("should be selecteable by classname card-list--name", () => {
    expect(wrapper.find(".card-list--name").length).toBe(1);
  });
  it("should be selecteable by classname card-list--button", () => {
    expect(wrapper.find(".card-list--button").length).toBe(1);
  });
  it("should be disable detail panel when showDetails is true", () => {
    expect(wrapper.find(Detail).length).toBe(0);
  });
  it("should be a button", () => {
    expect(wrapper.find("button").length).toBe(1);
  });
});
