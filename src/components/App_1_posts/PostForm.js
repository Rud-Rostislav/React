import React, {useState} from 'react';
import AddNewButton from "./AddNewButton";

export default function PostForm({createPost, posts, onSort, valueSort}) {
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

            <div>
                <select value={valueSort} onChange={event => onSort(event.target.value)}>
                    <option defaultChecked value='input'>Sort by input</option>
                    <option value='title'>Sort by title</option>
                    <option value='text'>Sort by text</option>
                </select>
            </div>

        </form>
    );
};