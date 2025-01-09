import { createSlice } from '@reduxjs/toolkit'

const loadFromLocalStorage = () => {
  const storedReviews = localStorage.getItem('reviews')
  return storedReviews ? JSON.parse(storedReviews) : {}
}

const saveToLocalStorage = (reviews) => {
  localStorage.setItem('reviews', JSON.stringify(reviews))
}

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: loadFromLocalStorage(),
  reducers: {
    addReview: (state, action) => {
      const { productId, review } = action.payload
      if (!state[productId]) {
        state[productId] = []
      }
      state[productId].push(review)
      saveToLocalStorage(state)
    },
    deleteReview: (state, action) => {
      const { productId, reviewIndex } = action.payload
      if (state[productId]) {
        state[productId].splice(reviewIndex, 1)
        if (state[productId].length === 0) {
          delete state[productId]
        }
        saveToLocalStorage(state)
      }
    },
  },
})

export const { addReview, deleteReview } = reviewsSlice.actions
export default reviewsSlice.reducer
