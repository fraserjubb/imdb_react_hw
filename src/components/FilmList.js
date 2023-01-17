import React from "react";
import Film from "./Film";

const FilmList = ({films}) => {

    const arr = films.map((film) => {
        return (
            <Film name ={film.name} url = {film.url}></Film>
        )
    })
    
    return (
        <>
        {arr}
        </>
    )
}



export default FilmList 