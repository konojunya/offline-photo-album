import * as React from "react";
import { Link } from "react-router-dom";

export default class Index extends React.Component {
  public render() {
    return (
      <>
        <h1>Hello from React.js</h1>
        <Link to="/about">to about page</Link>
      </>
    );
  }
}
