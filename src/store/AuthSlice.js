import { createSlice } from "@reduxjs/toolkit";

export const Authslice = createSlice({
    name: "auth",
    initialState:{
        status: false,
        userData: null
    },
     reducers:{
        toggleLoginRedux: function (state, action){
            state.status = true
             state.userData = action.payload
        },
        toggleLogoutRedux : function(state){
            state.status = false, 
            state.userData = null
        }
     }
})

export const {toggleLoginRedux, toggleLogoutRedux} = Authslice.actions

export default Authslice.reducer