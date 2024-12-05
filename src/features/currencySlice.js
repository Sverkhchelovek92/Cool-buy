import { createSlice } from '@reduxjs/toolkit'

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    currentCurrency: 'USD',
    currencies: ['USD', 'EUR', 'RUB'],
  },
  reducers: {
    setCurrency: (state, action) => {
      state.currentCurrency = action.payload
    },
  },
})

export const { setCurrency } = currencySlice.actions
export default currencySlice.reducer
