import React from 'react';
import './GoodsCard.css';

const GoodsCard = ({ image, name, price }) => {
    return (
        <div className="goods-card">
            <div className="image-container">
                <img src={image} alt={name} />
            </div>
            <div className="goods-info">
                <h3>{name}</h3>
                <p className="price">Ціна: {price} грн</p>
            </div>
        </div>
    );
};

export default GoodsCard;