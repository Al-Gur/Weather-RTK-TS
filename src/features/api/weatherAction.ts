import {setWeather} from "../weatherSlice.ts";
import {setMessage} from "../messageSlice.ts";
import {api_key, base_url} from "../../utils/constants.js";
import {AppDispatch} from "../../app/store.ts";

export const getWeather = (city: string) => {
    return (dispatch: AppDispatch) => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(result => result.json())
            .then(data => {
                dispatch(setWeather({
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: new Date(data.sys.sunset * 1000)
                }))
                dispatch(setMessage(''))
            })
            .catch(e => {
                console.log(e);
                dispatch(setMessage('Enter correct city name'))
            })
    }
}