import { createAsyncThunk } from "@reduxjs/toolkit";

export const getOTP = createAsyncThunk(
    'fetchAuth/getOTP',
    async (mobileNumber: string, { rejectWithValue }) => {
        try {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        //@ts-ignore
                        sent: true
                    })
                }, 3000)
            })
        } catch (error: any) {
            rejectWithValue(error.message)
        }
    }

);

export const getAuthDetails = createAsyncThunk(
    'fetchAuth/getAuthDetails',
    async ({ otp, mobileNumber }: { otp: string, mobileNumber: string }, { rejectWithValue }) => {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    resolve({
                        //@ts-ignore
                        name: "Piyush Sharma",
                        phone: "8512868672",
                        email: "piyush67.sharma@gmail.com",
                        token: "dsfjbdsfjkdsbfkdbfdsfbjdsn4545snfdbfdnsfdsbf.fdsfdsfdsfdsfdsfdbfd234234.hfgjhfdgfsdcvdvgfg456456"
                    })
                }, 3000)
            } catch (error: any) {
                rejectWithValue(error.message)
            }
        })
    },
);