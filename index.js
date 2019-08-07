// Add your code here
// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };
   
//   let configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
   
//   fetch("http://localhost:3000/dogs", configObj);

//Setup

function submitData(name, email) {
    let formData = {
        name, email
    }
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify( formData )
    }
    return fetch("http://localhost:3000/users", configObj)
    .then(function(response){
        // console.log(response.json())
        debugger
        return response.json()
    })
    .then(function( object ) {
        document.body.innerHTML = object[ "id" ]
      } )
      .catch()
      .catch(function(error) {
        // alert("Bad things! Ragnarők!");
        document.body.append(error.message)
        console.log(error.message);
      })
}



