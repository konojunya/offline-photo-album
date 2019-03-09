import * as React from "react";
import * as renderer from "react-test-renderer";
import { Loading } from "..";
describe("Loading component testing", () => {
  test("Loading component snapshot", () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
