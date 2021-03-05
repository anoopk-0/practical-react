import React from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

const HomeTooltip = () => {
    return (
        <div>

            <Tippy
                render={attrs => (
                    <div className="box" tabIndex="-1" {...attrs}>
                        My tippy box
                    </div>
                )}

            >
                <button>My button</button>
            </Tippy>
        </div>
    );
}

export default HomeTooltip;

/**
 * package : npm i @tippyjs/react
 */
