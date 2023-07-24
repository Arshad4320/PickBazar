import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";
import Login from "../Pages/Login/Login";
import Services from "../Pages/Services/Services";

const { default: Main } = require("../Sheard/RouterSetup/Main");

export const router =createBrowserRouter ([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: "/",
                element:<Home/>
            },
            {
                path: '/products',
                element:<Product/>
                
            },
            {
                path: '/login',
                element:<Login/>
            },
            {
                path: '/services',
                element:<Services/>
            }
        ]
    }
])