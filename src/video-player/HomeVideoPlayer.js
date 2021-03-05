import React from 'react';
import ReactPlayer from 'react-player';

const HomeVideoPlayer = () => {
    return (
        <div>
            <ReactPlayer
                url='https://www.youtube.com/watch?v=7sDY4m8KNLc&list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM&index=12'
                controls
                width='100%'
                onReady={() => { console.log(`on ready`) }}
            />
        </div>
    );
}

export default HomeVideoPlayer;

//react-player
