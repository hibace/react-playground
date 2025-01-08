import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: {
            id: 1
        },
    },
    reducers: {
        method: () => {
            console.log('userSlice method');
        }
    }
})


export const { method } = userSlice.actions

export default userSlice.reducer