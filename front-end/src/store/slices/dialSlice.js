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
        }
    }
})

export default Dial

export const {addNumber,removeNumber}=Dial.actions
