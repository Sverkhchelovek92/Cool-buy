import React from 'react'
import { Link } from 'react-router-dom'

import CurrencySelector from './CurrencySelector'

function Header() {
  return (
    <header>
      <div className="wrapper">
        <div className="header">
          <div className="header-logo">
            <Link to="/">COOL</Link>
          </div>

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
            <li className="header-menu-li">
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
