import { actionCreator } from "./actionCreator";
import { ThunkAction } from "../../../type";
import { ReduxAPIError, ReduxAPIState } from "redux-api-struct";

import { FetchImageByIdResponse } from "../../../../api-types/response";

/**
 * FetchImageById
 */
export const fetchImageByIdAction = actionCreator.async<void, FetchImageByIdResponse, ReduxAPIError>("FETCH_IMAGE_BY_ID");

export function fetchImageById(id: string): ThunkAction<void, any> {
  return async (dispatch, getState, { api }) => {
    const { imageReducer } = getState();
    if (!ReduxAPIState.isSuccess(imageReducer.images.status)) {
      const res = await api.fetchImageById(id);
      if (res.status !== 200) {
        dispatch(fetchImageByIdAction.failed({
          error: {
            statusCode: res.status
          }
        }))
        return;
      }

      dispatch(fetchImageByIdAction.done({
        result: res.data
      }))
      return;
    }

    const image = imageReducer.images.data.data.images.find((img) => img.id === id);

    if (!image) {
      dispatch(fetchImageByIdAction.failed({
        error: {
          statusCode: 404
        }
      }))
      return;
    }

    dispatch(fetchImageByIdAction.done({
      result: {
        ok: true,
        data: image
      }
    }));
  }
}