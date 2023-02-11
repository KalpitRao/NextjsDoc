function PostList({posts}){
    return (
        <>
        <h1>List of Posts</h1>
        {posts.map((post)=>{
            return (
                <div>
                    <p>{post.id} {post.title}</p>
                <hr />

                </div>
                
            )
        })}
        </>
    )
}

export default PostList

export async function getStaticProps(){
    const response = await fetch ("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()

    return {
        props:{
            posts:data.slice(0,3)
        }
    }
}
