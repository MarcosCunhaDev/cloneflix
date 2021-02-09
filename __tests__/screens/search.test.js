import React from "react";
import renderer from "react-test-renderer";

import Search from "../../src/screens/Search";

describe("<Search />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});

it("renders correctly", () => {
  const tree = renderer.create(<Search />).toJSON();
  expect(tree).toMatchSnapshot();
});
