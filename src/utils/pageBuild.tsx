import * as React from "react";
import { ReduxAPIStruct, ReduxAPIState } from "redux-api-struct";
import { Loading } from "../components/modules/Loading";
import { ErrorView } from "../components/modules/ErrorView";

export const pageBuild = (
  d: ReduxAPIStruct<any>,
  component: React.ReactNode
) => {
  switch (d.status) {
    case ReduxAPIState.INITIAL:
    case ReduxAPIState.FETCHING:
      return <Loading />;
    case ReduxAPIState.SUCCESS:
      return component;
    case ReduxAPIState.FAILURE:
      return <ErrorView statusCode={d.error.statusCode} />;
  }
};
