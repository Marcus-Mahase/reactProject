import React from 'react';

//Scroll is not a self closing component hence it has children.
const Scroll = (props) => {
    return (
        <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
            <div style={{ overflowY: 'scroll', height: '500px', width: '110%' }}>
                {props.children}
            </div>
        </div>
    )
}

export default Scroll;