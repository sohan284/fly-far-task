import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://flyfar-int-v2-user-panel.de.r.appspot.com/api/v1",
    prepareHeaders: (headers) => {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYxYjQ1OGE5LWQwY2ItNDExMS05OWI5LTU3ZTY1N2E2MDg1OCIsImVtYWlsIjoiZGV2QGZseWZhci50ZWNoIiwicGhvbmVOdW1iZXIiOiI4ODAxMzIyOTAzMjk4Iiwic2Vzc2lvbklkIjoibEhacUo3ejdHRzZFSzRxejd4VlVpWWQ2czFwSVkwa3MiLCJpYXQiOjE3NDYyNDcxMTIsImV4cCI6MTc0NjkzODMxMn0.BurcFRXFcGPobguAtUYgOZKRK5PZIqQEnLpfcnY1U_w' 
      if (token) {
        headers.set("Authorization", `Bearer ${token}`); 
      }
      return headers;
    },

  }),
  endpoints: (builder) => ({
    getAirports: builder.query({
      query: () => "/user/air-search",
    }),
    searchAirports: builder.mutation({
      query: (searchTerm) => ({
        url: "/admin/airports/search-suggestion",
        method: "POST",
        body: { keyword: searchTerm }, // Pass the search term in the body
      }),
    }),
    searchFlights: builder.mutation({
      query: (data) => ({
        url: "/user/air-search",
        method: "POST",
        body:  data , // Pass the search term in the body
      }),
    }),
  }),
});

export const { useGetAirportsQuery, useSearchAirportsMutation ,useSearchFlightsMutation } = apiSlice;