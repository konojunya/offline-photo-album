import {
  createAPIMockClient,
  AxiosMockAdapter
} from "../__mocks__/APIMockClient";
import { apiClient } from "../";

describe("API Client", () => {
  let mock: AxiosMockAdapter;

  beforeEach(() => {
    mock = createAPIMockClient(apiClient);
  });

  afterEach(() => {
    mock.reset();
  });

  test("example test", async () => {
    mock.onGet("/example").reply(200, "ok");
    const res = await apiClient.get("/example");
    expect(res.data).toBe("ok");
  });
});
