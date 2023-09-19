import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>
            Dashboard.jsx
            <div className='w-[80%]'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;