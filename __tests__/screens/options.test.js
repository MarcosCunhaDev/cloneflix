import React from "react";
import renderer from "react-test-renderer";

import Options from "../../src/screens/Options";

describe("<Options />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<Options />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});

it("renders correctly", () => {
  const tree = renderer.create(<Options />).toJSON();
  expect(tree).toMatchSnapshot();
});
