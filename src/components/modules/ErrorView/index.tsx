import * as React from "react";

interface Props {
  statusCode: number;
}

export const ErrorView = (props: Props) => {
  switch (props.statusCode) {
    case 500:
      return <p>500</p>;
    case 404:
      return <p>404 not found</p>
    default:
      return <p>エラー</p>
  }
}