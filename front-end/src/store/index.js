import { configureStore } from "@reduxjs/toolkit";
import Dial from "./slices/dialSlice"
import logSlice from "./slices/logSlice";
const store=configureStore({
    reducer:{
        dial:Dial,
        log:logSlice
    }
})
export default store