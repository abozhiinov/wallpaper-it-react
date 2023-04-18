import React from 'react';
import Logo from '../images/wallpaperit-Logo.png';

const Navigation = () => {
        return (
            <div className='navigation'>
                <div className='first-row'>
                    <a href="https://www.wallpaper-it.com/"><img src={Logo} className='logo'></img></a>
                    <div className='search-wrapper'>
                        <input type='text' className='search' placeholder='Search for products...'></input>
                        <button class="search-button"><span className="search-icon"></span></button>
                    </div>
                    <div className='user-elements'>
                        <div>
                            <span className='sign-in-icon'></span>
                            <p>Sign In</p>
                        </div>
                        <div>
                            <span className='wishlist-icon'></span>
                        <p>Wishlist</p> 
                        </div>
                        <div>
                            <span className='bag-icon'></span>
                            <p>Bag</p>
                        </div>
                    </div>
                </div> 
                <div className='second-row'>
                    <ul className='navigation-bar'>
                        <li>
                            <a>Wallpaper <i class="arrow-down"></i></a>
                        </li>
                        <li>
                            <a>Paint <i class="arrow-down"></i></a>
                        </li>
                        <li>
                            <a>Brands <i class="arrow-down"></i></a>
                        </li>
                        <li>
                            <a>Wall Murals</a>
                        </li>
                        <li>
                            <a>Wall Art <i class="arrow-down"></i></a>
                        </li>
                        <li>
                            <a>Sale</a>
                        </li>
                    </ul>
                </div>
                <div className='third-row'>
                    <p><span className='checkmark'>&#10003;</span>Free Delivery <span>On All Orders Over £50</span></p>
                    <p><span className='checkmark'>&#10003;</span>Customers Rate Us 4.7 / 5</p>
                    <p>Free & Easy <span>Returns*</span></p>
                </div>
            </div>
        );
}

export default Navigation;