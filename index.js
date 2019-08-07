// // Add your code here


// fetch(destinationURL, configurationObject);

// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };


// configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     }, 
//     body: JSON.stringify(formData)
//   };

//   fetch("http://localhost:3000/dogs", configObj).then(function(response){
//       return response.json();
//   }).then(function(object){
//       console.log(object)
//   }).catch(function(error){
//       alert("Bad things! Rangarök!");
//       console.log(error.message)
//   })

// function objectData(inputName, inputEmail) {
//         return Object.assign({},{name: inputName, email: inputEmail})
// }


// function submitData(inputName, inputEmail){
//     let objectData = Object.assign({},{name: inputName, email: inputEmail})
//     
//     return fetch("http://localhost:3000/users", configurationObject).then(function(response){
//         return response.json();
//     }).then(function(object){
//         debugger
//         return object.json()
//     }).catch(function(error){
//               console.log(error.message)
//           })



// }

function submitData(inputName, inputEmail){
 
    let configurationObject = {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }, 
                body: JSON.stringify({
                    name: inputName,
                    email: inputEmail
                  })
            }

    return fetch("http://localhost:3000/users", configurationObject).then(function(response) {
        return response.json();
      })
      .then(function(object) {
            document.body.innerHTML = object.id;
      })
      .catch(function(error) {
        document.body.innerHTML = error.message;
      });
}







