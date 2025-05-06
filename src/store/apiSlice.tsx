import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://flyfar-int-v2-user-panel.de.r.appspot.com/api/v1",
    prepareHeaders: (headers) => {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ0MGU4MzEyNDMyMDRiN2ZiN2NiYzJiM2NmYzk0ZWExIiwiZW1haWwiOiJhZnJpZGlAZmx5ZmFyLnRlY2giLCJwaG9uZU51bWJlciI6Ijg4MDEzMjI5MDMyOTgiLCJzZXNzaW9uSWQiOiJlYnhRb2RZVExUcWpkdDhYM0dMZmpXdWNUVnFIWmZTWiIsImlhdCI6MTc0MTIzMjQxNCwiZXhwIjoxNzQxOTIzNjE0fQ.EAWGrM0WbXngTDaatnl9bsTvFKrBq3NVzEaos_PuYRo' 
      if (token) {
        headers.set("Authorization", `Bearer ${token}`); 
      }
      return headers;
    },

  }),
  endpoints: (builder) => ({
    getAirports: builder.query({
      query: () => "/admin/airports/search-suggestion",
    }),
    searchAirports: builder.mutation({
      query: (searchTerm) => ({
        url: "/admin/airports/search-suggestion",
        method: "POST",
        body: { keyword: searchTerm }, // Pass the search term in the body
      }),
    }),
  }),
});

export const { useGetAirportsQuery, useSearchAirportsMutation } = apiSlice;