import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState:{
        userId: ''
    },
    reducers:{
        getUserId : (state, action)=>{
            state.userId = state.userId + action.payload
        }
    }
})

export const { getUserId } = createSlice.action
export default userSlice.reducer