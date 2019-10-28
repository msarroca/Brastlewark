import React from "react";
import { shallow } from "enzyme";
import SearchPanel from "./index";
import "../../setupTests";
import getApiInfo from "../../brastlewark-api";

describe("SearchPanel", () => {
  let useEffect;
  let wrapper;
  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect").mockImplementation(f => f());
    wrapper = shallow(<SearchPanel />);
  });
  it("should renders SearchPanel component ", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should be selecteable by classname c-results", () => {
    expect(wrapper.find(".c-results").length).toBe(1);
  });

  it("should be selecteable by classname c-results--title", () => {
    expect(wrapper.find(".c-results").length).toBe(1);
  });

  it("should be selecteable by classname c-results--info", () => {
    expect(wrapper.find(".c-results").length).toBe(1);
  });

  it("should call function getApiInfo once when the component is initiallly mounted", () => {
    expect(useEffect).toHaveBeenCalled();
  });
});
