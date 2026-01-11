import React from 'react';
import GoodsCard from '../GoodsCard/GoodsCard';
import './GoodsGallery.css';

const GoodsGallery = () => {
    // Масив товарів (дані)
    const goods = [
        {
            id: 1,
            name: "Кросівки Nike",
            price: 3200,
            image: "https://takeshoes.com.ua/wp-content/uploads/2024/09/photo_4_2025-04-10_15-50-50-1024x1024.jpg"
        },
        {
            id: 2,
            name: "Книга 'Clean Code'",
            price: 850,
            image: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
        },
        {
            id: 3,
            name: "Волейбольний м'яч Mikasa",
            price: 2100,
            image: "https://sportano.ua/img/986c30c27a3d26a3ee16c136f92f4ff5/4/9/4907225880980_20-jpg/m-jach-volejbol-nij-mikasa-v200w-rozmir-5-395880.jpg"
        },
        {
            id: 4,
            name: "Фігурка Ерен Єгер",
            price: 1500,
            image: "https://content1.rozetka.com.ua/goods/images/big/581091543.jpg"
        },
        {
            id: 5,
            name: "Сувенір 'Гном з Вроцлава'",
            price: 450,
            image: "https://t3.ftcdn.net/jpg/02/79/57/68/360_F_279576839_K5XX7XX7XX7X7X7X7.jpg"
        },
        {
            id: 6,
            name: "Механічна клавіатура",
            price: 4200,
            image: "https://cdn.27.ua/sc--media--prod/default/b0/fc/ed/b0fced99-b67d-4b35-89a9-0ab0b8966a4f.png"
        }
    ];

    return (
        <div className="gallery-section">
            <h2>Галерея товарів</h2>
            <div className="goods-grid">
                {goods.map((item) => (
                    <GoodsCard
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default GoodsGallery;