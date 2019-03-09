import { reducerWithInitialState } from "typescript-fsa-reducers";
import { fetchImagesAction } from "../actions/FetchImages";

import { ReduxAPIState, ReduxAPIStruct, createDefaultStruct, errorDefault } from "redux-api-struct";
import { FetchImagesResponse } from "../../../../api-types/response";

export interface ImageState {
  images: ReduxAPIStruct<FetchImagesResponse>;
}

export const initialState: ImageState = {
  images: createDefaultStruct()
}

export const imageReducer = reducerWithInitialState(initialState)
  /**
   * FetchImaegs
   */
  .case(fetchImagesAction.started, (state) => ({
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