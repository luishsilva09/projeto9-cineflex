import { Link, useParams } from "react-router-dom";
import axios from "axios";
import React from "react";
export default function MoviePage() {

    const { idMovie } = useParams()
    const [MovieData, setMovieData] = React.useState([])
    React.useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`)
        promise.then((movie) => setMovieData(movie.data))
        

    }, [])
    console.log(MovieData)

    return (
        <>
            <p>ola</p>
        </>
    )
}