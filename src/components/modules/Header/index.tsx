import * as React from "react";
import { Title, HeaderComponent } from "./styles";

export class Header extends React.Component {
  public render() {
    return (
      <HeaderComponent>
        <Title>Offline Photo Album</Title>
      </HeaderComponent>
    );
  }
}
