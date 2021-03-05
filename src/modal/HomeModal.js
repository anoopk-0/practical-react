import React, { useState } from 'react';
import Modal from 'react-modal';


//not define will give waring and it is required for accibility 
Modal.setAppElement('#root')

const HomeModal = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                shouldCloseOnOverlayClick={false}
                style={
                    {
                        overlay: {
                            background: '#ccc'
                        },
                        content: {
                            color: 'red'
                        }
                    }
                }
            >
                <h2>My title</h2>
                <button onClick={() => setIsOpen(false)}>close</button>
            </Modal>
            <button onClick={() => setIsOpen(true)} >Modal</button>
        </div>
    );
}

export default HomeModal;

/**
 * package : npm i react-modal
 *
 * onRequestClose: close on backdround drop
 */
