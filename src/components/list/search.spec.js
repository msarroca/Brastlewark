import React from "react";
import { shallow } from "enzyme";
import List from "./index";
import "../../setupTests";
import getApiInfo from "../../brastlewark-api";

describe("List", () => {
  let useEffect;
  let wrapper;
  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect").mockImplementation(f => f());
    wrapper = shallow(<List />);
  });
  it("should renders List component ", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should be selecteable by classname list-title", () => {
    expect(wrapper.find(".list-title").length).toBe(1);
  });

  it("should be selecteable by classname list-searcharea", () => {
    expect(wrapper.find(".list-searcharea").length).toBe(1);
  });

  it("should be selecteable by classname list-results", () => {
    expect(wrapper.find(".list-results").length).toBe(1);
  });

  it("should call function getApiInfo once when the component is initiallly mounted", () => {
    expect(useEffect).toHaveBeenCalled();
  });
});
