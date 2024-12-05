import React from 'react'
import CurrencySelector from './CurrencySelector'

function Header() {
  return (
    <header>
      <div className="wrapper">
        <div className="header">
          <div className="header-logo">COOL</div>

          <form action="/search" method="GET" className="header-search-bar">
            <input
              type="text"
              name="q"
              placeholder="Search for?"
              className="header-search-input"
            />
          </form>
          <CurrencySelector />
          <ul className="header-menu-ul">
            <li className="header-menu-li">About Us</li>
            <li className="header-menu-li">Help</li>
            <li className="header-menu-li">Profile</li>
            <li className="header-menu-li">Cart</li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
