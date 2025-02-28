import React from 'react';

export default function StartBtn(props) {
    const handleStart = () => {
        props.actions.initialAction();
    };

    return (
        <div>
            <button className='start-btn' onClick={handleStart}>
                🔧 Start Tech Support
            </button>
        </div>
    );
}
