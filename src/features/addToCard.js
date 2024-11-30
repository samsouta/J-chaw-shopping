import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  card: [],
  count: 0,
  totalAmount: 0,
};
export const addToCardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      const isExisted = state.card?.find(
        (item) => item?.id === payload.card?.id
      );
      if (isExisted) {
        return state;
      } else {
        state.count += 1;
        state.totalAmount += payload.price,
        state.card = [...state.card, {...payload.card, quantity: 1}];
      }
    },
    addQts: (state, { payload }) => {
      state.card = state.card.map((item) => {
        if (item?.id === payload.id) {
          return { ...item, quantity: item.quantity + 1 }
        } else {
          return item
        }
      })
      state.totalAmount += payload.price
    },
    removeQts: (state, { payload }) => {
      state.card = state.card.map((item) => {
        if (item?.id === payload.id) {
         return { ...item, quantity: item.quantity - 1 }
        } else {
          return item;
        }
      })
      state.totalAmount -= payload.price
    },
    removeOneItem: (state, {payload}) =>{
       payload.id.map((idc)=> {
       state.card.map((pr)=> {
          if(pr?.id === idc){
            state.totalAmount -= pr?.price * pr?.quantity
            state.count -= 1
          }
        })
        state.card = state.card.filter((item)=> item?.id != idc)
       })
    }
  },
});

export const {
  addProduct,
  addQts,
  removeQts,
  addTotalAmount,
  removeTotalAmount,
  removeOneItem
} = addToCardSlice.actions;
export default addToCardSlice.reducer;
