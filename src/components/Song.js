import React from 'react';

const Song = (songs) => {
    if (!songs) return null;

    return (
        <div className="container">
            <div id="song-details-container">
                <h2  className="position">{songs.position}</h2>
                <img src={songs.image} alt={songs.title}/>
                <div className="songs-details">
                    <b>{songs.title}</b>
                    <p className="label">{songs.label}</p>
                </div>
            </div>
        </div>
    )
}

export default Song;
