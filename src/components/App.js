import Header from "./App_2_pizza/Header";
import Header2 from "./App_1_posts/Header";
import Footer from "./App_2_pizza/Footer";
import Menu from "./App_2_pizza/Menu";
import Logo from "./App_3_toDoList/Logo";
import Form from "./App_3_toDoList/Form";
import ToDoList from "./App_3_toDoList/ToDoList";
import Stats from "./App_3_toDoList/Stats";
import {useState} from "react";
import Questions from "./App_4_questions/Questions";
import PostForm from "./App_1_posts/PostForm";
import PostList from "./App_1_posts/PostList";
import ClearButton from "./App_1_posts/ClearButton";

export default function App() {
    // App 1
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'Python',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            id: 2,
            title: 'Java',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            id: 3,
            title: 'HTML',
            text: 'A Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            id: 4,
            title: 'CSS',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            id: 5,
            title: 'JavaScript',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            id: 6,
            title: 'React',
            text: 'B Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        }
    ])

    const createPost = (post) => {
        setPosts([...posts, post])
    }

    function deletePost(id) {
        const updatedPosts = posts.filter(post => post.id !== id)
            .map((post, index) => ({
                ...post,
                id: index + 1,
            }));

        setPosts(updatedPosts);
    }

    function clearAll() {
        setPosts([])
    }

    // Dark mode
    const [darkModeToogle, setDarkModeToogle] = useState(true)
    const darkMode = {background: '#1d1e1f'};
    const lightMode = {background: '#ffffff'};

    function toggleDarkMode() {
        setDarkModeToogle(!darkModeToogle)
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

    // App 3
    const [items, setItems] = useState([]);

    function AddItems(item) {
        setItems(items => [...items, item]);
    }

    function deleteItem(id) {
        setItems(items => items.filter(item => item.id !== id));
    }

    function ToogleItem(id) {
        setItems(items => items.map(item => item.id === id ? {...item, done: !item.done} : item));
    }

    function clearItems() {
        setItems([]);
    }


    return (
        <div style={{backgroundColor: darkModeToogle ? darkMode.background : lightMode.background}}>

            <div className="App_1">
                <Header2 toggleDarkMode={toggleDarkMode} text={darkModeToogle ? '🌙' : '☀️'}/>

                <PostForm posts={posts} createPost={createPost} valueSort={selectedSort}
                          onSort={sortPosts}/>
                {posts.length > 0 ? (
                    <>
                        <PostList posts={posts} deletePost={deletePost}/>
                        <ClearButton clearAll={clearAll}/>
                    </>
                ) : <p>Постів ще немає</p>
                }
            </div>

            <div>
                <Header/>
                <Menu/>
                <Footer/>
            </div>

            <div className="div_wrapper todo_list_gap">
                <Logo/>
                <Form items={items} itemsLength={items.length} onAddItems={AddItems} onCLearItems={clearItems}/>
                <ToDoList items={items} onDeleteItem={deleteItem} onToggleItem={ToogleItem}/>
                <Stats items={items}/>
            </div>

            <div className="div_85_percent_height">
                <Questions/>
            </div>

        </div>
    );
}