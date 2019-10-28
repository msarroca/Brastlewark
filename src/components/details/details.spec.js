import React from "react";
import { shallow } from "enzyme";
import DetailPanel from "./index";
import "../../setupTests";

describe("DetailPanel", () => {
  const dummyProps = {
    character: {
      professions: ["job1", "job2"],
      friends: ["friend1", "friend2"]
    }
  };

  it("renders DetailPanel Component", () => {
    shallow(<DetailPanel {...dummyProps} />);
  });
});
