import React from "react";
import renderer from "react-test-renderer";

import Section from "../../src/components/Sections";

describe("<Section />", () => {
  it("has 2 children", () => {
    const tree = renderer.create(<Section />).toJSON();
    expect(tree.children.length).toBe(2);
  });
});

it("renders correctly", () => {
  const tree = renderer.create(<Section />).toJSON();
  expect(tree).toMatchSnapshot();
});
