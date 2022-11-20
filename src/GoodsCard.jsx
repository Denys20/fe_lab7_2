import React from "react";
import { Fruits } from "./goodsData";
import './style.css';

const GoodsCard = () => {
    return (
        <div className="container" style={{textAlign: 'center'}}>
            {Fruits.map(fruit => <GoodCard info={fruit} key={fruit.name}/>)}
        </div>
    );
};

const GoodCard = ({info}) => {
    const {image, name, price} = info;

    return (
        <div className="product">
            <img src={image} alt='Product' width={200} />
            <p>Назва: {name}</p>
            <p>Ціна: {price} грн</p>
        </div>
    );
};

export default GoodsCard;