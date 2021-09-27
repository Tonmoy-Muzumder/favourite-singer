import React from 'react';
import './Singer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Singer = (props) => {
    const {name, img, age, album, country, salary} = props.singer;
    return (
      <div class="column">
      <div class="row">
        <div>
          <img style={{height:280, width: 320, margin: 10}} src={img} alt="" />
         <h1>Name : {name}</h1>
         <h3>Age : {age}</h3>
         <h3>Album : {album}</h3>
         <h3>Country : {country}</h3>
         <h3>Salary : {salary}</h3>
         
         <button onClick={() => props.handleAddToCart(props.singer)}
           style={{width: 150, height: 30, backgroundColor: "pink", fontSize: 15}}
           ><FontAwesomeIcon icon={faShoppingCart} />  Add To Cart</button>
        </div>
      </div>
      {/* <div class="column">2</div>
      <div class="column">3</div> */}
    </div>
      
    );
};

export default Singer;