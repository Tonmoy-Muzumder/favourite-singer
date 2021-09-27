import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;

   for(const singer of cart){
       if(!singer.quantity){
           singer.quantity = 1;
       }
      
       total = total + singer.salary * singer.quantity;
       totalQuantity = totalQuantity + singer.quantity;
      
   }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>My Cart</h1>
            <hr />

            <h2>singer Item : {totalQuantity}</h2>
            <hr />
            <h2>Total Salary : <span>$ {total}</span></h2>
            <hr />

        </div>
    );
};

export default Cart;