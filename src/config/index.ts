export interface Config {
  API_BASE_URL: string;
  API_TIMEOUT: number;
}

export const IS_PRODUCTION = process.env.NODE_ENV === "production";
export const config: Config = require(`./config.${process.env.NODE_ENV ||
  "local"}`).config;
