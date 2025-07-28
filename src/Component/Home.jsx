import React, { useEffect, useState } from 'react'


function Home() {
    const [count, setcount] = useState(0)
    const [user, setuser] = useState([])



    useEffect(() => {
        console.log("helloo this is the value of count", count)
        document.title = 'Tamanna sharma'
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((data) => { return data.json() })
            .then((result) => {
                console.log(result)
                setuser(result)
            })

            .catch((err) => {
                console.log("got error", err)
            })
    }, [])


    return (
        <>
            <h3> Home page</h3>

            <ul>
                {user.map((u) => (
                    <li key={u.id}> <p>Name: {u.name}</p>
                        <p>Username: {u.username}</p>
                        <p>Email: {u.email}</p></li>
                ))}



            </ul>
        </>
    )
}

export default Home
//for state count
/*const [count, setcount] = useState(0)
<p>This is count  {count}</p>
<button onClick={() => { setcount(count + 1) }}>increment the count</button>*/
