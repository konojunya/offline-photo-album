import { actionCreator } from "./actionCreator";
import { ThunkAction } from "../../../type";
import { ReduxAPIError, ReduxAPIState } from "redux-api-struct";
import { Params } from "../../../../api/FetchImages";

import { FetchImagesResponse } from "../../../../api-types/response";

/**
 * FetchImages
 */
export const fetchImagesAction = actionCreator.async<
  void,
  FetchImagesResponse,
  ReduxAPIError
>("FETCH_IMAGES");

export function fetchImages(params: Partial<Params>): ThunkAction<void, any> {
  return async (dispatch, getState, { api }) => {
    if (!ReduxAPIState.isSuccess(getState().imageReducer.images.status)) {
      dispatch(fetchImagesAction.started());

      const res = await api.fetchImages(params);
      if (res.status !== 200) {
        dispatch(
          fetchImagesAction.failed({
            error: {
              statusCode: res.status
            }
          })
        );
        return;
      }

      dispatch(
        fetchImagesAction.done({
          result: res.data
        })
      );
    }
  };
}
