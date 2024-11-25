import {configureStore} from "@reduxjs/toolkit"
import categoryReducer  from "../features/CategorySlice";
import productReducer  from "../features/ProductSlice";
import cartReducer from "../features/CartSlice";

export const store = configureStore({
    reducer: {
        category: categoryReducer, //product harus sama dengan category di name slice
        product: productReducer, //category harus sama dengan category di name slice
        cart: cartReducer,// setelah dibuat, lalu akan dirtambahkan kedalam Order
    }
})

//data ini yg akan digunakan pada state 