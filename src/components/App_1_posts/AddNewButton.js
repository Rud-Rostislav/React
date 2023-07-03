import React from 'react';

export default function AddNewButton({addPost}) {
    return (
        <button className="add_new" onClick={addPost}>Add new</button>
    );
};