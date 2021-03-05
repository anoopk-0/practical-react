import React from 'react';

import { BounceLoader, BarLoader, BeatLoader } from 'react-spinners';

const HomeLoaderIndicator = () => {
    return (
        <div>
            <BounceLoader loading size={100} color="blue" />
            <br />
            {/* <BarLoader loading /> */}
            {/* <br />
            <BeatLoader loading />  */}

        </div>
    );
}

export default HomeLoaderIndicator;


//react-spinner
//want to give some stying then add @emotion package