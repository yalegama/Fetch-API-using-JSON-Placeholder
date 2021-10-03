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