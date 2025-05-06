import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home.js";
import Layout from "../layout/Layout.js";
import AirSearch from "../pages/FlightSearch.js";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/flight-search',
                element:<AirSearch/>
            }
        ]
    },
]);