import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    addressForm: '',
}

export const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        getAddress: (state,{payload})=>{
            state.addressForm = payload
        }
    }
})

export const {getAddress} = checkoutSlice.actions
export default checkoutSlice.reducer