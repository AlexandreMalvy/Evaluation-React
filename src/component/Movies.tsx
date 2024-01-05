import {useAppDispatch, useAppSelector} from "../store/hook.ts";
import {Movie} from "../type/movie.ts";
import {addMovie, asyncAddMovie} from "../store/movieStore.ts";

export default function Movies() {
    const movies = useAppSelector(store => store.movie)
    const dispatch = useAppDispatch()

  
    return (
        
    )
}
