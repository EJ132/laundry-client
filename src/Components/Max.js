import React from 'react'

export default function Person(props){
    return (
        <div>
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
            <p>Height(inches): {props.height}</p>
            <p>Favorite Color: {props.color}</p>
            <p>Pet: {props.cat ? props.cat : props.dog}</p>
        </div>
    )
}