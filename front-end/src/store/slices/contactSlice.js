import { createSlice } from "@reduxjs/toolkit";

const contactSlice=createSlice({
    name:"contact",
    initialState:[],
    reducers:{
        addContact:(state,action)=>{
            state.push(action.payload)
        },
        delContact:(state,action)=>{
            state.splice(action.payload,1)
        }
    }
})

export const {addContact,delContact}=contactSlice.actions
export default contactSlice.reducer