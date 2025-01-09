import { configureStore } from '@reduxjs/toolkit'
import currencyReducer from './currencySlice'
import cartReducer from './cartSlice'
import reviewsReducer from './reviewsSlice'

const store = configureStore({
  reducer: {
    currency: currencyReducer,
    cart: cartReducer,
    reviews: reviewsReducer,
  },
})

export default store
