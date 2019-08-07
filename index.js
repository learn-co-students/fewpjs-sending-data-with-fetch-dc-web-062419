// Add your code here



function submitData(name, email){
    return fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json" 
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(function(response){
        return response.json();
    })
    .then(function(object){
        debugger
        document.body.innerHTML = object.id;
    })
    .catch(function(error){
        alert("Something has gone wrong!");
        document.body.innerHTML = error.message
    })
}