import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Singer from '../Singer/Singer';
import "./Singers.css"


const Singers = () => {
    const [singers, setSingers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
         fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setSingers(data))
    },[]);

    const handleAddToCart = (singer) => {
        const newCart = [...cart, singer];
        setCart(newCart);
    }
    return (
       

  
<div className="singers-container">
            <div className="singer-container">

            <h1 style={{color:"red"}}>
                    My Favorite Top {singers.length} Singer</h1>

            {
                singers.map(singer => <Singer 
                    key={singer.id}
                    singer={singer}
                    handleAddToCart={handleAddToCart}></Singer>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Singers;