import React from 'react';
import { Link } from 'react-router';

const Discover = () => {
    return (
        <section className='flex flex-col gap-8 items-center py-20 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg'>
            <h2 className='text-3xl lg:text-4xl font-bold text-center max-w-2xl'>
                Ready to find your perfect pet or supplies?
            </h2>
            <p className='text-gray-600 text-center max-w-xl'>
                Browse our complete collection of pets and pet supplies from trusted sellers in your area.
            </p>
            <Link to="/public/pets-and-suppliers" className="btn btn-primary btn-lg">
                Browse Pets & Suppliers
            </Link>
        </section>
    );
};

export default Discover;