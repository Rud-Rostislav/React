import React from 'react';

const ClearButton = ({clearAll}) => {
    return (
        <div>
            <button className="add_new clear_all" onClick={clearAll}>Clear all</button>
        </div>
    );
};

export default ClearButton;