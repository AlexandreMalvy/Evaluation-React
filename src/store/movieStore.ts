import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Movie} from "../type/movie.ts";
import {AppDispatch} from "./store.ts";
import fakeApiCall from "../lib/fakeApiCall.ts";

const initialState: Movie[] = [
    {
        id: 1,
        title: "Les dents de la mer",
        img: "",
    },
    {
        id: 2,
        title: 'Pirate des caraïbes',
        img: ""
    }
]

export const asyncAddMovie = (movie: Movie, timerMilli: number) => {
    return async (dispatch: AppDispatch) => {
        const res = await fakeApiCall(movie, timerMilli)
        dispatch(addMovie(res))
    }
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState: initialState,
    reducers: {
        addMovie: (state, action: PayloadAction<Movie>) => {
            return [
                ...state,
                action.payload
            ]
        },
        deleteMovie: (state, action: PayloadAction<number>) => {
            return state.filter(e => e.id !== action.payload)
        },
       
    }
})

export const {
    addMovie,
    deleteMovie,
} = movieSlice.actions

export const movieReducer = movieSlice.reducer
