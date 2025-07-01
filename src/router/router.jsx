import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../Pages/App';
import RootLayout from '../Pages/RootLayout/RootLayout';
import About from '../Pages/About';
import Profile from '../Pages/Profile';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import CardDetailsPage from '../Pages/CardDetailsPage';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import Contact from '../Pages/Contact';
import Loading from '../Pages/Loading';
import PrivacyPolicy from '../Pages/PrivacyPolicy';
import PrivateRoute from '../Pages/PrivateRoute';
import Service from '../Pages/Service';






export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: App,
                loader: () => fetch('/appsData.json'),
                hydrateFallbackElement:<Loading></Loading>
            },
            {
                path: 'cardDetails/:id',
                element:    <PrivateRoute>
                              <CardDetailsPage/>
                             </PrivateRoute>,
                loader: () => fetch('/appsData.json'),
                hydrateFallbackElement:<Loading></Loading>
            },
            {
                path: 'about',
                Component: About
            },
            {
                path: 'profile',
                element:<PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            },
            {
                path: 'sign up',
                Component: SignUp
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path:'contact',
                Component:Contact
            },
            {
                path:'privacy',
                Component:PrivacyPolicy
            },
            {
                path:'service',
                Component:Service
            }
        ]
    },


])
