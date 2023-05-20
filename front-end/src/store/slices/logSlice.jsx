import { createSlice } from "@reduxjs/toolkit";

const logSlice= createSlice({
    name:"log",
    initialState:[],
    reducers:{
        addLog(state,action){
            state.push(action.payload)
        },
        removeLog(state,action){
           state.reverse().splice(action.payload,1)
        }
    }
})

export default logSlice.reducer;
export const  {addLog,removeLog}=logSlice.actions;