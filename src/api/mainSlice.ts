import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";

export const mainSlice = createApi({
    reducerPath: "api",
    baseQuery: axiosBaseQuery({ 
        baseUrl: import.meta.env.VITE_API_URL,
    }),
    endpoints: () => ({})
});