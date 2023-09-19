import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {

    const {products} = useLoaderData();
    
    // const [products, setProducts] = useState([])
    // useEffect(() => {
    //     fetch('https://dummyjson.com/products')
    //     .then(res => res.json())
    //     .then(data => setProducts(data.products));
    // }, []);

    return (
        <div className='grid grid-cols-3 gap-5 p-5'>
            {
                products.map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;