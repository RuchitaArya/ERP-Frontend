import { createSlice } from "@reduxjs/toolkit";


const initialState = { userData: {}};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.userData = action.payload.user;
        },
      
    },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;