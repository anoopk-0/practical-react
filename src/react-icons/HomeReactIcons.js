import React from 'react';
import { FaApple } from "react-icons/fa";

const HomeReactIcons = () => {
    return (
        <div>
            <FaApple color="purple" size="10rem" />
        </div>
    );
}

export default HomeReactIcons;

/*

react provide a package for icons :  npm install react-icons,

to provide  same colors to all the icons, we can use IconContex

    <IconContext.provider value={{color:'red'}}>
      <FaApple />
       <FaApple color="purple" />
    </IconContext.provider>

    if we give color props to individual icons then it take the precedence.

*/
