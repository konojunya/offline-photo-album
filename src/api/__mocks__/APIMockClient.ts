import { AxiosInstance } from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
export { AxiosMockAdapter };

export const createAPIMockClient = (client: AxiosInstance) => {
  return new AxiosMockAdapter(client);
};
