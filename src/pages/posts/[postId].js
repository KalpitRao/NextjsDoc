function PostID(){

}

export default PostID


export async function getStaticProps(){
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts/1') 
}