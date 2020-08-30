import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyEnd from '../../images/giphy.gif'

const Review = () => {
    const [orderPlaced,setOrderPlaced] = useState(false);
    const [cart, setCart] = useState([]);
    const removedProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart)
        removeFromDatabaseCart(productKey)
    }
    useEffect(() => {
        //cart
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const cartProduct = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key]
            return product;
            
        })
        setCart(cartProduct)

    }, [])
    
    //plaeiorder-handel -AerA
    const placeOrderHandel = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    };

    let thankyou;
    
    if (orderPlaced) {
        thankyou = <img src={happyEnd} alt="" />;
    }
 
    return (
        <div className="shop-container">
            <div className="product-container">
                 {
                cart.map(pd => <ReviewItem
                    removedProduct={removedProduct}
                    key ={pd.key}
                    product={pd}></ReviewItem>)
                }
                {
                    thankyou
                }
           </div>
            <div>
                <Cart cart={cart}>
                    <button onClick={placeOrderHandel} className="order-btn">Place Order</button>
                </Cart>
           </div>
        </div>
    );
};

export default Review;