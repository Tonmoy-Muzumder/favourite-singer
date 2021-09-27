import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="header">

            <nav>
                <h1 style={{color: 'white',
            fontSize: 60,
            margin: 0}}>Favorite Singer</h1>
            
                <a href="/home">Home</a>
                <a href="/albums">Albums</a>
                <a href="/music">Music List</a>
                <a href="/music">Top Singer</a>
                <input type="text" />
                <button>Search</button>
                <h1 style={{fontSize: 50,
                color: 'white', margin: 0}}>Total Budget : 100 Million</h1>

                
            </nav>
        </div>
        </div>
    );
};

export default Header;