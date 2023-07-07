import React, {useState} from "react";
import Header2 from "./Header";
import PostForm from "./PostForm";
import PostList from "./PostList";
import ClearButton from "./ClearButton";

export default function App_1({darkModeToogle, toggleDarkMode}) {
    // Post list
    const [posts, setPosts] = useState([{
        id: 1, title: 'Python', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }, {
        id: 2, title: 'Java', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }, {
        id: 3, title: 'HTML', text: 'A Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }, {
        id: 4, title: 'CSS', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }, {
        id: 5, title: 'JavaScript', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }, {
        id: 6, title: 'React', text: 'B Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }])

    // Create post
    const createPost = (post) => {
        setPosts([...posts, post])
    }

    // Delete post
    function deletePost(id) {
        const updatedPosts = posts.filter(post => post.id !== id)
            .map((post, index) => ({
                ...post, id: index + 1,
            }));

        setPosts(updatedPosts);
    }

    // Clear all
    function clearAll() {
        setPosts([])
    }

    // Sort
    const [selectedSort, setSelectedSort] = useState('')

    const sortPosts = (sort) => {
        setSelectedSort(sort)
        if (sort === 'title') {
            setPosts([...posts].sort((a, b) => a.title.localeCompare(b.title)))
        } else if (sort === 'text') {
            setPosts([...posts].sort((a, b) => a.text.localeCompare(b.text)))
        } else if (sort === 'input') {
            setPosts([...posts].sort((a, b) => a.id - b.id))
        }
    }

    return (
        <div className="App_1">
            <Header2 toggleDarkMode={toggleDarkMode} text={darkModeToogle ? '🌙' : '☀️'}/>

            <PostForm posts={posts} createPost={createPost} valueSort={selectedSort}
                      onSort={sortPosts}/>
            {posts.length > 0 ? (<>
                <PostList posts={posts} deletePost={deletePost}/>
                <ClearButton clearAll={clearAll}/>
            </>) : <p>Постів ще немає</p>}
        </div>
    );
}