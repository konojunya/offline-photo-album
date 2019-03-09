import { apiClient } from "./";

export const fetchImageById = (id: string) => {
  return apiClient.get(`/image/${id}`);
}