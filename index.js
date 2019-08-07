// Add your code here
function submitData(stringName, stringEmail) {
    let body = document.querySelector('body')
    let h1 = document.createElement('h1')
    let data = {name: stringName, email: stringEmail}
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    };
   return fetch("http://localhost:3000/users", configObj).then(function(response) {
       return response.json()
   }).then(function(object) {
        body.innerHTML = `${object.id}`
   }).catch(function(error) {
       body.innerHTML += `${error.message}`
   })
}