import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
    
    const [cart, setCart] =useState([])
    const first10 = fakeData.slice(0, 10);
    const [product, setProduct] = useState(first10);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        })
        setCart(previousCart)
},[])

    const handelAddProduct = (product) => {
        const toBeAddedKey = product.key;
             const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey)
            newCart =[...others,sameProduct];
        } else {
            product.quantity = 1;
            newCart =[...cart,product];
        }
        setCart(newCart);
   
        addToDatabaseCart(product.key, count)

    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    product.map(pd => <Product
                        showAddToCart={true}
                        key ={pd.key}
                    handelAddProduct={handelAddProduct}
                     product={pd}
                     ></Product>)
                }
                
            </div>
           <div className="cart-container">
                <Cart cart={cart}>
                 <Link to="/review">
                 <button className="order-btn">Review Order</button>
            </Link>
             </Cart>
           </div>
        </div>
    );
};

export default Shop;