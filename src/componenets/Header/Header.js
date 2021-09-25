import React from 'react';
import logo from '../img/logo.jpg'
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className='header'>
                <img src={logo} alt="Logo" />
                <h4 className='text-white mt-4'> Total Budget : 100M</h4>
                <nav>
                    <ul className='nav'>
                        <li className='list-unstyled'> <a href="/home"> Home </a></li>
                        <li className='list-unstyled'> <a href="/about"> About </a></li>
                        <li className='list-unstyled'> <a href="/contact"> Contact Us </a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;