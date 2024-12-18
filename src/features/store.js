import { configureStore } from '@reduxjs/toolkit'
import currencyReducer from './currencySlice'
import cartReducer from './cartSlice'

const store = configureStore({
  reducer: {
    currency: currencyReducer,
    cart: cartReducer,
  },
})

export default store
