/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const Dial=createSlice({
    name:"dial",
    initialState:"",
    reducers:{
        addNumber:(state,action)=>{
            return ((state+=action.payload).slice(0,10))
            // console.log(action.payload)
        },
        removeNumber:(state)=>{
            return((state.substring(0,state.length-1)))
        },
       eraseAll:(state)=>{
        return " "
        
       }
    }
})

export default Dial.reducer;

export const {addNumber,eraseAll,removeNumber}=Dial.actions
