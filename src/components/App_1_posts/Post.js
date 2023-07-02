import React from 'react';

const Post = ({post, deletePost}) => {
    return (
        <div className="post">
            <strong>{post.id}. {post.title}</strong>
            <p>{post.text}</p>
            <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
    );
};

export default Post;