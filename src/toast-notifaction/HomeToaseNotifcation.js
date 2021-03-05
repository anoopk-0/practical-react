import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CustomeToast = ({ closeToast }) => {
    return <div>
        something went worng
        <button onClick={closeToast}>close</button>
    </div>
}

toast.configure()

const HomeToaseNotifcation = () => {

    const notify = () => {
        toast("Wow so easy!", { position: toast.POSITION.BOTTOM_RIGHT })
        toast.success("Success !!", { position: toast.POSITION.TOP_CENTER, autoClose: 8000 })
        toast.error("Error !!", { autoClose: false })
        toast.warn("Warning !!")
        //other is info

        toast.info(<CustomeToast />)

    }

    return (
        <div>
            <button onClick={notify}>Notify!</button>
        </div>
    );
}

export default HomeToaseNotifcation;

/*
package : npm i react-toastify



*/
