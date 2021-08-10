import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentForm: 'register'
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    switchForm: (state, action) => {
      state.currentForm = action.payload
    },
    setDefault: (state) => {
      state = initialState
    }
  },
})

// Action creators are generated for each case reducer function
export const { switchForm, setDefault } = authSlice.actions

export default authSlice.reducer