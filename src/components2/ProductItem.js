import React,{useState} from 'react';
import Card from './Card';
import './ProductItem.css';

import ProductDate from './ProductDate';

function ProductItem(props){

    // let title=props.title;
    const [title, setTitle]= useState(props.title);

    function clickHandler(){
        // title="popcorn";
        setTitle("popcorn");
        console.log("button clicked")
    }
    return(
        <Card className='product-item'>
        <ProductDate
        date={props.date}></ProductDate>
        <div className='product-item__description'>
        {/* <h2>{props.title}</h2> */}
        <h2>{title}</h2>

        </div>
        <button onClick={clickHandler}>Add to Cart</button>

        </Card>
    );


}

export default ProductItem;