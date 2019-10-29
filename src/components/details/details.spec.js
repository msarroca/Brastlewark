import React from "react";
import { shallow } from "enzyme";
import Detail from "./index";
import "../../setupTests";

describe("Detail", () => {
  const dummyProps = {
    character: {
      professions: ["job1", "job2"],
      friends: ["friend1", "friend2"]
    }
  };

  const wrapper = shallow(<Detail {...dummyProps} />);

  it("renders Detail Component", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should be selecteable by classname details-container ", () => {
    expect(wrapper.find(".details-container").length).toBe(1);
  });

  it("should be selecteable by classname details-container--jobs", () => {
    expect(wrapper.find(".details-container--jobs").length).toBe(1);
  });

  it("should be selecteable by classname details-container--friends", () => {
    expect(wrapper.find(".details-container--friends").length).toBe(1);
  });
});
