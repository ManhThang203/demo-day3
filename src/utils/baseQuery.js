import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_API,
  prepareHeaders: (headers) => {
    const access_token = localStorage.getItem("accessToken");
    if (access_token) {
      headers.set("province", `Bearer ${access_token}`);
    }
    return headers;
  },
});

export default baseQuery;
