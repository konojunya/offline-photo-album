import { apiClient } from "./";
import qs from "query-string";
import { FetchImagesResponse } from "../api-types/response";

export interface Params {
  limit: number;
  offset: number;
}

export const fetchImages = (params: Partial<Params>) => {
  return apiClient.get<FetchImagesResponse>(`/images?${qs.stringify(params)}`);
}