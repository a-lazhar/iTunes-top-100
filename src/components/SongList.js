import React from 'react';
import Song from './Song'

const SongList = (props) => {
    if (!props.songs) return;

    const songs = props.songs.map((song, index) => {
        return (
            <Song
                key={index}
                position={index + 1}
                image={song["im:image"][2].label}
                title={song.title.label}
                label={song.rights.label}
            />
        )
    })

    return (
        <React.Fragment>
            {songs}
        </React.Fragment>
    )
}

export default SongList;
