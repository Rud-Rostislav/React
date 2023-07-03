import React from 'react';
import Post from "./Post";

export default function PostList({posts, deletePost}) {
    return (
        <div className='posts'>
            {posts.map((post) =>
                <Post post={post} key={post.id} deletePost={deletePost}/>
            )}
        </div>
    );
};