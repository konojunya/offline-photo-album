import { reducerWithInitialState } from "typescript-fsa-reducers";
import { fetchImagesAction } from "../actions/FetchImages";
import { fetchImageByIdAction } from "../actions/FetchImageById";

import {
  ReduxAPIState,
  ReduxAPIStruct,
  createDefaultStruct,
  errorDefault
} from "redux-api-struct";
import {
  FetchImagesResponse,
  FetchImageByIdResponse
} from "../../../../api-types/response";

export interface ImageState {
  images: ReduxAPIStruct<FetchImagesResponse>;
  detail: ReduxAPIStruct<FetchImageByIdResponse>;
}

export const initialState: ImageState = {
  images: createDefaultStruct(),
  detail: createDefaultStruct()
};

export const imageReducer = reducerWithInitialState(initialState)
  /**
   * FetchImaegs
   */
  .case(fetchImagesAction.started, state => ({
    ...state,
    images: {
      ...state.images,
      status: ReduxAPIState.FETCHING,
      error: errorDefault()
    }
  }))
  .case(fetchImagesAction.done, (state, action) => ({
    ...state,
    images: {
      ...state.images,
      status: ReduxAPIState.SUCCESS,
      data: action.result
    }
  }))
  .case(fetchImagesAction.failed, (state, action) => ({
    ...state,
    images: {
      ...state.images,
      status: ReduxAPIState.FAILURE,
      error: action.error
    }
  }))
  /**
   * FetchImageById
   */
  .case(fetchImageByIdAction.started, state => ({
    ...state,
    detail: {
      ...state.detail,
      status: ReduxAPIState.FETCHING,
      error: errorDefault()
    }
  }))
  .case(fetchImageByIdAction.done, (state, action) => ({
    ...state,
    detail: {
      ...state.detail,
      status: ReduxAPIState.SUCCESS,
      data: action.result
    }
  }))
  .case(fetchImageByIdAction.failed, (state, action) => ({
    ...state,
    detail: {
      ...state.detail,
      status: ReduxAPIState.FAILURE,
      error: action.error
    }
  }));
