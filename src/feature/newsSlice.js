import { createSlice } from "@reduxjs/toolkit";

const initialState={
    List:[],
}

const newsSlice=createSlice({

    name:'newsslice',
    initialState,
    reducers:{
        getList:(state,action)=>{
            state.List=[...action.payload.list]
        }
        
    }

})

export const {getList} =newsSlice.actions;

export default newsSlice.reducer