import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home.js";
import Layout from "../layout/Layout.js";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
]);