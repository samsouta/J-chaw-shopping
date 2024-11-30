import { configureStore } from '@reduxjs/toolkit'
import { resgiterAuth } from './services/resgiterAuth'
import { LoginAuth } from './services/loginAuth'
import categorySlice from './categorySlice'
import { fetchData } from './Api/FetchData'
import addToCard from './addToCard'
import userSlice from './userSlice'
import checkoutSlice from './checkoutSlice'


export const store = configureStore({
    reducer: {
        category: categorySlice,
        card: addToCard,
        user: userSlice,
        checkout:checkoutSlice,
        [resgiterAuth.reducerPath]: resgiterAuth.reducer,
        [LoginAuth.reducerPath]: LoginAuth.reducer,
        [fetchData.reducerPath]: fetchData.reducer,
    
    },
    
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(resgiterAuth.middleware, LoginAuth.middleware,fetchData.middleware),
  })