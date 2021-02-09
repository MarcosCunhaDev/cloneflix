import React from "react";
import renderer from "react-test-renderer";

import Card from "../../src/components/Card";

describe("<Card />", () => {
  it("has 2 children", () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree.children.length).toBe(2);
  });
});

it("renders correctly", () => {
  const tree = renderer.create(<Card />).toJSON();
  expect(tree).toMatchSnapshot();
});
