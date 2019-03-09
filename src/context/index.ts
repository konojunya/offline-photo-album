import {
  applyMiddleware,
  compose,
  createStore,
  Store,
  DeepPartial
} from "redux";
import thunk from "redux-thunk";
import { History } from "history";

// api
import { fetchImages } from "../api/FetchImages";
import { fetchImageById } from "../api/FetchImageById";

import { routerMiddleware } from "connected-react-router";
import { createRootReducer, RootState } from "./reducer";

const composeEnhancers =
  (process.title === "browser" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export type RootStore = Store<RootState>;
export interface ExtraArguments {
  api: {
    fetchImages: typeof fetchImages;
    fetchImageById: typeof fetchImageById;
  };
}

export const configureStore = (
  history: History,
  preloadedState: DeepPartial<RootState>
): RootStore => {
  const extraArguments: ExtraArguments = {
    api: {
      fetchImages,
      fetchImageById
    }
  };
  const middlewares = [
    thunk.withExtraArgument(extraArguments),
    routerMiddleware(history)
  ];

  return createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
};
