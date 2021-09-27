import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
    let name = "";

   for(const singer of cart){
       if(!singer.quantity){
           singer.quantity = 1;
       }
      
       total = total + singer.salary * singer.quantity;
       totalQuantity = totalQuantity + singer.quantity;

       if(!name){
          
       }
       name = name + " , " +  singer.name;
   }

   
    return (
        <div>
            <h1 style={{textAlign: "center"}}>My Cart</h1>
            <hr />

            <h2 style={{color: 'green'}}>Singer Added : {totalQuantity}</h2>
            <hr />
            <h2 style={{color: 'green'}}>Total Salary : <span>$ {total}</span></h2>
            <hr />
            <h2 style={{color: 'blue'}}>Singer Name: {name}</h2>
            <hr />
            <button style={{color: 'white',
            backgroundColor: 'blue',
            height: 35
        }}>Call For Concert</button>
            </div>
            
                
            
    );
};

export default Cart;