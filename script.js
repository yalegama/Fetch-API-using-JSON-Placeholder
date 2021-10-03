document.getElementById('refresh').addEventListener('click',refresh);

function refresh(){
    window.location.reload();
}



document.getElementById('getText').addEventListener('click',getText);

function getText(){
    fetch('sample.txt')
    .then((res)=>res.text())
    .then((data)=>document.getElementById('output').innerHTML=data)
    .catch((err)=>console.log("error"))
}


document.getElementById('getUsers').addEventListener('click',getUsers);

function getUsers(){
    fetch('users.json')
    .then((res)=>res.json())
    .then((users)=>{
        let output=`<h1>Users Details</h1>`

        users.forEach((value,index,array)=>{
            output+=`<ul>
                        <li>Name is: ${value.name}</li>
                        <li>Email is: ${value.email}</li>
                    </ul>`
        })

        document.getElementById('output').innerHTML=output;

    })
    .catch((err)=>console.log('error'))


}

/**Get Api Data */

document.getElementById('getPosts').addEventListener('click',getPosts);

function getPosts(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>res.json())
        .then((users)=>{
            let output=`<h1>Users</h1>`
            users.forEach((value,index,array)=>{
                output+=`
                
                <div>
                
                <h2>User Id: ${value.userId}</h2>
                <h2>Id: ${value.id}</h2>
                <h3>Title: ${value.title}</h3>
                <p>Body: ${value.body}</p>

                </div>

                `
            })
            document.getElementById('output').innerHTML=output;
        })
        .catch((err)=>console.log("Error"))
}