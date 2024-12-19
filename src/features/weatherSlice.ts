import {createSlice} from "@reduxjs/toolkit";
import {getWeather} from "./api/weatherAction.ts";
import {setMessage} from "./messageSlice.ts";
import {useAppDispatch} from "../app/hooks.ts";

const dispatch = useAppDispatch();
const weatherSlice = createSlice({
    name: "weather",
    initialState: {},
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getWeather.pending, () => dispatch(setMessage('Pending...'))
            .addCase(getWeather.fulfilled,
                        (_state, action) => {
                           dispatch(setMessage(''));
                           return action.payload
                        })
            .addCase(getWeather.rejected,
                        e => {
                            console.log(e);
                            dispatch(setMessage('Enter correct city name'))
                        })
    }
})

export default weatherSlice.reducer;
