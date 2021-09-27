import React from 'react';
import './Singer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Singer = (props) => {
    const {name, img, age, album, country, salary} = props.singer;
    return (
      
        <div className="single-singer">
          <div className="data">
          <img src={img} alt="" />
          <div className="details">
          <h1>Name: {name}</h1>
          <h3>Age: {age}</h3>
          <h3>Album: {album}</h3>
          <h3>Country: {country}</h3>
          <h3>Salary: <span>$</span> {salary}</h3>

          <button onClick={() => props.handleAddToCart(props.singer)}
           style={{width: 150, height: 30, backgroundColor: "pink"}}
           ><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
          </div>
          </div>

          
        </div>



    );
};

export default Singer;