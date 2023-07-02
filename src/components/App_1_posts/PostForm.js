import React, {useState} from 'react';
import AddNewButton from "./AddNewButton";

const PostForm = ({createPost, posts}) => {
    const [post, setPost] = useState({title: '', text: ''});

    function addPost(e) {
        e.preventDefault();
        if (post.title && post.text) {
            createPost({...post, id: posts.length + 1});
            setPost({title: '', text: ''})
        } else {
            alert('Заповніть всі поля')
        }
    }

    return (
        <form>
            <div className='input_div'>
                <input type="text" placeholder="Title" value={post.title}
                       onChange={e => setPost({...post, title: e.target.value})}/>
                <textarea placeholder="Text" value={post.text}
                          onChange={e => setPost({...post, text: e.target.value})}/>
            </div>

            <AddNewButton addPost={addPost}/>
        </form>
    );
};

export default PostForm;