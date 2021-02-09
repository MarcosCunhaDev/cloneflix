import React from "react";
import renderer from "react-test-renderer";

import BannerAnimated from "../../src/components/BannerAnimated";

describe("<BannerAnimated />", () => {
  it("has 2 children", () => {
    const tree = renderer.create(<BannerAnimated />).toJSON();
    expect(tree.children.length).toBe(2);
  });
});

it("renders correctly", () => {
  const tree = renderer.create(<BannerAnimated />).toJSON();
  expect(tree).toMatchSnapshot();
});
