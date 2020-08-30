import React from 'react';

const ReviewItem = (props) => {
    const { name, quantity,key,price } = props.product;
    const reviewStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        marginLeft: '200px',
        paddingBottom:'5px'
    }
    return (
        <div style={reviewStyle}>
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>$ {price}</small></p>
            <br />
            <button className="order-btn" onClick={() => props.removedProduct(key)}>Removed</button>
        </div>
    );
};

export default ReviewItem;