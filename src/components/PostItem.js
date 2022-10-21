const PostItem = ({post}) => {
    const handleChick = (e) => {
        console.log(e.target.id)
    } 

    return(
        <div onClick={handleChick} className="listItem">
            <h1>{post.title}</h1>
            <p>{post.id}</p>
        </div>
    )
}

export default PostItem

