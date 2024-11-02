import React, {Suspense} from "react";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import HomePage from "./pages/homePage";
import LoginPage from './pages/SignIn/login';
import SignUp from './pages/SignUp/register';
import Checkout from "./pages/checkout/Checkout";
import ProductDetails from "./pages/viewProduct/viewProduct";
import Profile from "./pages/userProfile/profile";
import AdminPanelUsers from './pages/adminPanel/users';
import AdminPanelHome from './pages/adminPanel/home';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import OrdersPage from "./pages/adminPanel/orders";
import AnalyticsPage from "./pages/adminPanel/analytics";

// Routingni yaratish
const routes = [
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/dashboard",
        element: <AdminPanelHome/>,
        children: [
            {path: "users", element: <AdminPanelUsers/>},
            {path: "orders", element: <OrdersPage/>},
            {path: "analytics", element: <AnalyticsPage/>},
        ],
    },
    {path: "/login", element: <LoginPage/>},
    {path: "/register", element: <SignUp/>},
    {path: "/productDetails", element: <ProductDetails/>},
    {path: "/profile", element: <Profile/>},
    {path: "/checkout", element: <Checkout/>},
];


const router = createBrowserRouter(routes, {
    future: {
        v7_normalizeFormMethod: true,
    },
});


const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
    return (
        <Suspense fallback={<div style={{textAlign: 'center', marginTop: '20%'}}>Loading...</div>}>
            <LazyComponent/>
            <RouterProvider router={router}/>
        </Suspense>
    );
}

export default App;
