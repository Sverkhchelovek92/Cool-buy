import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrency } from '../features/currencySlice'

function CurrencySelector() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dispatch = useDispatch()
  const { currentCurrency, currencies } = useSelector((state) => state.currency)

  const handleCurrencyChange = (currency) => {
    dispatch(setCurrency(currency))
    setIsDropdownOpen(false)
  }

  return (
    <div className="header-currency-div">
      <button
        className="header-currency-btn"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {currentCurrency}
      </button>
      {isDropdownOpen && (
        <ul className="header-currency-dropdown">
          {currencies.map((currency) => (
            <li key={currency} onClick={() => handleCurrencyChange(currency)}>
              {currency}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CurrencySelector
