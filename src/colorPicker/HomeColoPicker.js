import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

const HomeColoPicker = () => {

    const [show, setShow] = useState(false)
    const [color, setColor] = useState('#fff')

    return (
        <div>
            <h1>you pickked : {color}</h1>
            <ChromePicker
                color={color}
                onChange={updatedColor => setColor(updatedColor.hex)}
            />
        </div>
    );
}

export default HomeColoPicker;

//yarn add react-color 
