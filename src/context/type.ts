import { Action, Dispatch } from "redux";
import {
  ThunkDispatch as ReduxThunkDispatch,
  ThunkAction as ReduxThunkAction
} from "redux-thunk";
import { ExtraArguments } from "./";
import { RootState } from "./reducer";

export type GetState = () => RootState;

export interface DispatchProp {
  dispath: Dispatch;
}

export type ThunkDispatch<A extends Action> = ReduxThunkDispatch<
  RootState,
  ExtraArguments,
  A
>;
export type ThunkAction<R, A extends Action> = ReduxThunkAction<
  R,
  RootState,
  ExtraArguments,
  A
>;