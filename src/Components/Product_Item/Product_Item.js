import React from 'react';
import './Product_Item.css'

export default function Product_Item(props) {
        return (
            <div className="Product_Item">
                <img src={props.url} alt={props.name} />
                <h3>{props.name}</h3>
                <p>{props.price}</p>
            </div>
        )
}