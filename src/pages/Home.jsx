import React from 'react';
import { Navigate } from 'react-router';

const Home = () => {
    return (
        <Navigate to="/toys"></Navigate>
    );
};

export default Home;