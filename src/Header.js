import React from 'react'
import './Header.css'
import punkLogo from './assets/header/cryptopunk-logo.png'
import search from './assets/header/search.png';
import light from './assets/header/theme-switch.png'
function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={punkLogo} alt="demo" />
            </div>

            <div className="header__search">
                <div className="search__logo">
                    <img className="search" src={search} alt="demo" />
                </div>
                <input placeholder="Collection, items or users" />
            </div>

            <div className="header__text">
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>

            <div className="header__lightbox">
                <img src={light} alt="" />
            </div>

            <div className="header__btn">get in</div>
        </div>
    )
}

export default Header
