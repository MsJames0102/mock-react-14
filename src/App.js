import {useState, useEffect} from 'react'
import Posts from './components/Posts'
import Loading from './components/Loading'
import Title from './components/Title'
import SinglePosts from './components/SinglePost'

const App = () => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState([false])


    useEffect(() => {
        const getPosts = async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts')
            const json = await data.json()
            
            setPosts(json)
            setLoading(true)
        }

        getPosts()
    }, [])
if(loading) {
    return (
        <>
            <Title />
            {posts.length > 0 ? <Posts posts={posts} id="list" /> : <Loading />}
        </>
    )
    }else{
        return <Loading/>
    }
    
}

export default App