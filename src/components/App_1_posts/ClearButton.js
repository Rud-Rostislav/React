import React from 'react';

export default function ClearButton({clearAll}) {
    return (
        <div>
            <button className="add_new clear_all" onClick={clearAll}>Clear all</button>
        </div>
    );
};