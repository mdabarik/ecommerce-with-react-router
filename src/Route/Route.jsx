import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Products from '../pages/Products/Products';
import Home from '../pages/Home/Home';
import Prod from '../pages/Prod/Prod';
import DashboardLayout from '../layouts/DashboardLayout';
import Dashboard from '../components/Dashboard/Dashboard';
import Profile from '../components/Profile/Profile';
import EditProfile from '../components/EditProfile/EditProfile';

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader: () => fetch('https://dummyjson.com/products')
            },
            {
                path: '/products/:prodId',
                element: <Prod></Prod>,
                loader: ({params}) => fetch(`https://dummyjson.com/products/${params.prodId}`)
            },
            {
                path: '/dashboard',
                element: <DashboardLayout></DashboardLayout>,
                children: [
                    {
                        path: '/dashboard',
                        element: <Dashboard></Dashboard>
                    },
                    {
                        path: '/dashboard/profile',
                        element: <Profile></Profile>
                    },
                    {
                        path: '/dashboard/editProfile',
                        element: <EditProfile></EditProfile>
                    }
                ]
            }
        ]
    }
])

export default myCreatedRoute;