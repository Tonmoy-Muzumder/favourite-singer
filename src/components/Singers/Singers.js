import React, { useEffect, useState } from 'react';
import Singer from '../Singer/Singer';
// import Cart from '../Cart/Cart';
// import Cart from '../Cart/Cart'


const Singers = () => {
    const [singers, setSingers] = useState([]);

    useEffect(() =>{
         fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setSingers(data))
    },[])
    return (
       

  
<div className="singers-container">
            <div className="singer-container">

            <h1 className="font">My Favorite Top {singers.length} Singer</h1>

            {
                singers.map(singer => <Singer 
                    key={singer.id}
                    singer={singer}></Singer>)
            }
            </div>
            {/* <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div> */}
        </div>
    );
};

export default Singers;