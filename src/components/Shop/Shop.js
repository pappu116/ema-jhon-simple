import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [product, setProduct] = useState(first10);
    const handelAddProduct=(product)=>{
        console.log('product added',product);
        const newCart=[...cart, product];
        setCart(newCart)
    }
    const [cart, setCart] =useState([])
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                product.map(pd => <Product
                    handelAddProduct={handelAddProduct}
                     product={pd}
                     ></Product>)
                }
                
            </div>
           <div className="cart-container">
             <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;