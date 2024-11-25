import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCategory = createAsyncThunk(
    "category/getAllCategory", //ini nama action
    async () => {
        const response = await axios.get("/categories"); // end point api
        return response.data; //response.data adalah data yang diterima dari server yang akan dikirim ke reducer.
    }
)

// buat category entity properti id sebagai identifier unik dari setiap item kategori yang akan disimpan dalam state.
const categoryEntity = createEntityAdapter({
    selectId: (category) => category.id
});

// buat slice category state managemen redux
const categorySlice = createSlice({
    name:"category", // harus sama dengan getAllCategory diatas
    initialState: categoryEntity.getInitialState(),

    extraReducers: (builder) => {
        builder.addCase(getAllCategory.fulfilled, (state, action) => {
            categoryEntity.setAll(state, action.payload)
        })
    }
})

// ini yang akan diimport diambil untuk mengambil semua data category
//getSelectors adalah utilitas dari createEntityAdapter yang secara otomatis membuat selector untuk state kita. Selector adalah fungsi yang digunakan untuk mengambil data dari store Redux.
export const categorySelectors = categoryEntity.getSelectors((state) => state.category)

//export reducer
// export reducer with a named export
export default categorySlice.reducer;



//nanti CategorySlice ini dipanggil dalam store index.js