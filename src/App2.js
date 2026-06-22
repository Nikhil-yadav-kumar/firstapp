import './App.css';

import React from 'react';
import Products from './components2/Products';
import NewProduct from './components2/NewProduct'

function App2(){
    const products=[
        {
            id:'p1',
            title:'Nirma',
            amount:100,
            date: new Date(2021, 8,10)
        },
        {
            id:'p2',
            title:'Nirma',
            amount:200,
            date: new Date(2024, 8,10)
        },
        {
            id:'p3',
            title:'Nirma',
            amount:300,
            date: new Date(2022, 8,10)
        },
        {
            id:'p4',
            title:'Nirma',
            amount:400,
            date: new Date(2025, 8,10)
        },
    ];

    return (
        <div>
        <NewProduct />
            <Products items={products}></Products>
        </div>
    );
}

export default App2;