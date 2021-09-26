import React from 'react';
import './Singer.css'
// import { Button } from 'react-bootstrap';
// import Cart from '../Cart/Cart';


const Singer = (props) => {
    const {name, img, age, album, country, salary} = props.singer;
    return (
      
        <div className="single-singer">
          <div className="data">
          <img src={img} alt="" />
          <div className="details">
          <h1>Name: {name}</h1>
          <h1>Age: {age}</h1>
          <h1>Album: {album}</h1>
          <h1>Country: {country}</h1>
          <h1>Salary: {salary}</h1>
          </div>
          </div>
        </div>
    );
};

export default Singer;