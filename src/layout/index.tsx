import * as React from "react";
import { Header } from "../components/modules/Header";
import { MainContainer } from "./style";

export class AppLayout extends React.Component {
  public render() {
    return (
      <>
        <Header />
        <MainContainer>{this.props.children}</MainContainer>
      </>
    );
  }
}
