import * as React from "react";
import { Header } from "../components/modules/Header";
import { MainContainer } from "./style";
import shallowequal from "shallowequal";
import { ErrorView } from "../components/modules/ErrorView";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class AppLayout extends React.Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public componentDidUpdate(prev: Props) {
    if (
      this.state.hasError &&
      !shallowequal(this.props.children, prev.children)
    ) {
      this.setState({
        hasError: false
      });
    }
  }

  public componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  public render() {
    return (
      <>
        <Header />
        {this.state.hasError ? (
          <ErrorView statusCode={999} />
        ) : (
          <MainContainer>{this.props.children}</MainContainer>
        )}
      </>
    );
  }
}
