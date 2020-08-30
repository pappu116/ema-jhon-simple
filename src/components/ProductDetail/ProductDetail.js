import React from 'react';
import fakeData from '../../fakeData';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetail = () => {
    const { productKey } = useParams();
    const product = fakeData.find(pd => pd.key === productKey)
    console.log(product)
    return (
        <div>
            <h2> Your Product details </h2>
            <Product showAddToCart={false} product = {product}></Product>
        </div>
    );
};

export default ProductDetail;