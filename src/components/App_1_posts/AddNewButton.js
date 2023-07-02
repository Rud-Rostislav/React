import React from 'react';

const AddNewButton = ({addPost}) => {
    return (
            <button className="add_new" onClick={addPost}>Add new</button>
    );
};

export default AddNewButton;