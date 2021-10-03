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
            output+=`<ul class="list-group mb-3">
                        <li class="list-group-item">Name is: ${value.name}</li>
                        <li class="list-group-item">Email is: ${value.email}</li>
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
            let output=`<h1 class="mb-4">Users</h1>`
            users.forEach((value,index,array)=>{
                output+=`
                
                <div class="card card-body mb-3">
                
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


/***Form  */

document.getElementById('addPost').addEventListener('submit',addThisPost);

function addThisPost(e){
    e.preventDefault();
    let title=document.getElementById('title').value;
    let body=document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts'),{
        method:'POST',
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            title:title,
            body:body
        })
        .then((res)=>res.json())
        .then((data)=>console.log(data))
    }

}