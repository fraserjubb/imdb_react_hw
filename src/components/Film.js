import React from "react";

const Film = ({name, url}) => {

    return (
    <>
    <p href={url}>{name} </p>
    </>
    )
}

export default Film