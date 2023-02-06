//Static generation with getStaticProps.


function users({ users }) {
  return (
    <>
    <h1>List Of Users</h1>
    {
        users.map((user)=>{
            return (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            )
        })
    }
    
    </>
  )
}

export default users


export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    console.log(data)

    return {
        props:{
            users:data,
        },
    }
}