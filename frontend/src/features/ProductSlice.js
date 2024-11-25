import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getProduct = createAsyncThunk(
   "product/getAllProduct",
    async () => {
        const response = await axios.get("/products")
        return response.data
    }
) 

// filter category
//mengambil berdasarkan category
export const getProductByCategory = createAsyncThunk(
    "product/getProductByCategory",
    async (category) => {
        const response = await axios.get(`/products?category_id=${category}`)
        return response.data
    }
)

//definisikan product nya
const productSlice = createSlice({
   name: "product",
   initialState: {
    data:null,
    loading: false,
    error:null
   },
   reducers: {},
   extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
        state.loading= true;
        state.error = null;
        state.data = null;
    })
    .addCase(getProduct.fulfilled,(state,action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;

    })
    .addCase(getProduct.rejected,(state,action) => {
        state.error = action.error.message;
        state.loading = false;
        state.data = null;
    })
    // filter berdasarkan category
    .addCase(getProductByCategory.pending, (state) => {
        state.loading= true;
        state.error = null;
        state.data = null;
    })
    .addCase(getProductByCategory.fulfilled,(state,action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;

    })
    .addCase(getProductByCategory.rejected,(state,action) => {
        state.error = action.error.message;
        state.loading = false;
        state.data = null;
    })
}
})

export default productSlice.reducer;