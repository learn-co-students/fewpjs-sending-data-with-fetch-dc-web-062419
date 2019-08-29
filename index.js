// On a successful POST request, expect the server to respond 
// with a [Response][response] object. 
// Just like we saw earlier in the dog example, the body property of this 
// response will contain the data from the POST request along with a newly 
// assigned id.

// Use a then() call to access the Response object and use its built in json() 
// method to parse the contents of the body property. Use a second then() to 
// access this newly converted object. From this object, find the new id and
//  append this value to the DOM.

// Using index.html and the JSON server, if your code is successful, 
// calling submitData in the console should cause an id number 
// to appear on the page.

const userUrl = "http://localhost:3000/users"

function submitData(name, email) {

    return fetch(userUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    }).then(response => response.json())
    .then(json => addResponse(json))
    .catch(error => addError(error))
}

function addResponse(json){
    let newDiv = document.createElement('div')
    newDiv.textContent = json["id"]
    let body = getBody()
    body.appendChild(newDiv)
}

function addError(error) {
    let newDiv = document.createElement('div')
    newDiv.textContent = error.message
    let body = getBody()
    body.appendChild(newDiv)
}
function getBody() {
    return document.getElementsByTagName('body')[0]
}