import React, { useRef, useState } from 'react';
import IdleTimer from 'react-idle-timer'
import Modal from 'react-modal';

const IdleTimerContainer = () => {

    const idleTimerRef = useRef();

    const [loggedIn, setLoggedIn] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const onIdle = () => {
        setIsOpen(true)
    }

    const stayActive = () => {
        setIsOpen(false)
    }

    const logOut = () => {
        setLoggedIn(false);
        setIsOpen(false);

    }

    return (
        <div>
            {
                loggedIn ? <h1>Hello You are loggged in </h1> : <h1>User is logged out!!</h1>
            }
            <Modal isOpen={isOpen}>
                <h3>You have idle for a while, do you want to logged you ?? </h3>
                <button onClick={logOut}>Logged me out</button>
                <button onClick={stayActive}>keep me signed in</button>
            </Modal>
            <IdleTimer
                ref={idleTimerRef}
                timeout={5000}
                onIdle={onIdle}
            />

        </div>
    );
}

export default IdleTimerContainer;
