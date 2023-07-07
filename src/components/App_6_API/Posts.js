import React, {useEffect, useState} from "react";

export default function Posts() {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => setPosts(posts)).catch((error) => setError(error.message))
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    if (error) {
        return <h1>{error}</h1>
    }

    return (<>
            <h1 className='margin_25'>Кількість постів: {posts.length}</h1>

            <div className="posts">
                {isLoading ? <h1>Loading posts...</h1> : posts.map(post => <div key={post.id} className='post post_api'>
                    <h2>{post.id}. {post.title}</h2>
                    <p>{post.body}</p>
                </div>)}
            </div>
        </>
    )
}