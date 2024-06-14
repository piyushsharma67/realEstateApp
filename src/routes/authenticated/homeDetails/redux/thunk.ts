import { createAsyncThunk } from "@reduxjs/toolkit";
import { homeDetails } from '../utils/homedetails'

export const fetchHomeDetails = createAsyncThunk(
    'fetchHomeDetails',
    async (_, { rejectWithValue }) => {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    //@ts-ignore
                    resolve(homeDetails)
                }, 3000)
            } catch (error: any) {
                rejectWithValue(error.message)
            }
        })
    },
);

export const unlockHome = createAsyncThunk(
    'unlockHome',
    async (_, { rejectWithValue }) => {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    //@ts-ignore
                    resolve(true)
                }, 3000)
            } catch (error: any) {
                rejectWithValue(error.message)
            }
        })
    },
);