function submitData(userName, userEmail) {
    let configObject = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    };

    return fetch("http://localhost:3000/users", configObject)
        .then(response => response.json())
        .then(object => document.body.innerHTML = object["id"])
        .catch(err => document.body.innerHTML = err.message)
}