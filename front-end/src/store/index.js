import { configureStore } from "@reduxjs/toolkit";
import Dial from "./slices/dialSlice"
import logSlice from "./slices/logSlice";
import contactSlice from "./slices/contactSlice";
const store=configureStore({
    reducer:{
        dial:Dial,
        log:logSlice,
        contact:contactSlice
    }
})
export default store