import { createSlice } from "@reduxjs/toolkit";


//We use initial state to check if user is authenticated or not from store
const initialState = {
    status : false,
    userData: null,
}
 
    
// Create a slice of the store for authentication
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login : (state, action) => {
            state.status = true;
            state.userData = action.payload; // payload contains user data
        },
        logout: (state) => {
            state.status = false;
            state.userData = null; // Clear user data on logout
        },
    }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;