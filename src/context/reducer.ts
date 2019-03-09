import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";

import { imageReducer } from "./modules/Image/reducers";

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    imageReducer
  });

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;