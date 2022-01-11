import { createApi } from "unsplash-js";

const api_key = process.env.REACT_APP_API_KEY;

export const unsplash = createApi({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${api_key}`,
  },
});
