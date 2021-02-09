import React from "react";
import renderer from "react-test-renderer";

import CardBanner from "../../src/components/CardBanner";

describe("<CardBanner />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<CardBanner />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});

it("renders correctly", () => {
  const tree = renderer.create(<CardBanner />).toJSON();
  expect(tree).toMatchSnapshot();
});
