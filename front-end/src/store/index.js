import { configureStore } from "@reduxjs/toolkit";
import Dial from "./slices/dialSlice"
const store=configureStore({
    reducer:{
        dial:Dial.reducer
    }
})
export default store