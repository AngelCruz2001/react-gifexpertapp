import React from 'react'

export const GifGridItem = ({title,url }) => {
    return (
        <div className = "card animate__heartBeat">
            <p>{title}</p>
            <img src = {url} alt = {title}></img>
        </div>
    )
}
