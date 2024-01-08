import { createSlice } from "@reduxjs/toolkit";

const FontSlice=createSlice({
    name:'FontSlice',
    initialState: '16px',
    reducers: {
        changFontSize:(state,action)=>{
          return state=action.payload
        }
    }
})

export const {changFontSize} =FontSlice.actions;
export default FontSlice.reducer