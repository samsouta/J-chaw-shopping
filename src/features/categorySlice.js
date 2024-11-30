import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
  }

export const categorySlice = createSlice({
    name:'category',
    initialState,
    reducers: {
        getGategory: (state,{payload}) => {
            state.value = payload.data
        },
        getAllGategory: (state, {payload}) => {
            state.value = payload
        }
    }
})

export const {getGategory,getAllGategory} = categorySlice.actions

export default categorySlice.reducer