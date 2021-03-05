import React from 'react';
import CountUp, { useCountUp } from 'react-countup';

const HomeCountUp = () => {

    const { countUp, start, pauseResume, reset, update } = useCountUp({
        duration: 100,
        end: 10000,
        startOnMount: false
    })

    return (
        <div>
            <CountUp
                prefix='$'
                decimal={2}
                start={0}
                end={200}
                duration={10}
            />

            <h3>Hooks</h3>
            <h1>{countUp}</h1>
            <button onClick={start}>start</button>
            <button onClick={pauseResume}>pauseResume</button>
            <button onClick={reset}>reset</button>
            <button onClick={() => update(2000)}>update</button>
        </div>
    );
}

export default HomeCountUp;
/**
 * package :npm i react-countup
 */
