import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="header">

            <nav>
            
                <a href="/home">Home</a>
                <a href="/albums">Albums</a>
                <a href="/music">Music List</a>
                <a href="/music">Top Singer</a>
                <input type="text" />
                <button>Search</button>
                <h1 style={{fontSize: 50,
                color: 'white'}}>Total Budget : 100 Million</h1>

                
            </nav>
        </div>
        </div>
    );
};

export default Header;