import React from 'react';
import Post from "./Post";

const PostList = ({posts, deletePost}) => {
    return (
        <div className='posts'>
            {posts.map((post) =>
                <Post post={post} deletePost={deletePost}/>
            )}
        </div>
    );
};

export default PostList;