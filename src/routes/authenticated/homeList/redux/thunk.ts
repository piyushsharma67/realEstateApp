import { createAsyncThunk } from "@reduxjs/toolkit";
import { homelist } from "../utils/homelist";

export const fetchHomeList = createAsyncThunk(
    'fetchHomeList',
    async (_, { rejectWithValue }) => {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    resolve({
                        //@ts-ignore
                        homes: homelist
                    })
                }, 3000)
            } catch (error: any) {
                rejectWithValue(error.message)
            }
        })
    },
);