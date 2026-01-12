import React from 'react';
import ToyStore from '../components/homelayout/ToyStore';
import useTitle from '../hooks/useTitle';

const PetsAndSuppliers = () => {
    useTitle("Pets & Suppliers");

    return (
        <section>
            <ToyStore></ToyStore>
        </section>
    );
};

export default PetsAndSuppliers;