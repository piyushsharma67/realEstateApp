import { createSlice } from "@reduxjs/toolkit";
import { AuthInitialState } from "./type";

const initialState: AuthInitialState = {
    user: null
}
const AuthSlice = createSlice({
    name: "AuthSlice",
    initialState,
    reducers: {
        insertUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const AuthActions = { ...AuthSlice.actions }

export default AuthSlice.reducer