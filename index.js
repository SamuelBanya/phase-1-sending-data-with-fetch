// Add your code here
const formData = {
    dogName: "Byron",
    dogBreed: "Poodle"
};

const configurationObject = {
    // NOTE: If we comment this next line out, then the '.catch()' block will complain in the console with this error message:
    // Failed to execute 'fetch' on 'Window': Request with GET/HEAD method cannot have body.
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(formData),
};

// Format for 'fetch()' method:
// fetch(destination_url, configurationObject);
fetch("http://localhost:3000/dogs", configurationObject)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        console.log(object);
    })
    .catch(function(error) {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
    });

// The first two tests mirror the behavior of the JSON server.
// As you write your solution, keep the server running to test your code.
// Open index.html in a browser to gain access to your submitData function in console.

function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
        .then(function(response) {
            return response.json();
        })
    // Use a second then() to access this newly converted object. From this object, find the new id and append this value to the DOM.
        .then(function(object) {
            console.log("object.id: ", object.id);
            console.log("object[\"id\"]: ", object["id"]);
            // TODO: Add object's 'id' to the DOM
            // From 'phase-0-the-dom-modifying-elements-lab' Lab:
            const newHeader = document.createElement("h1");
            newHeader.textContent = object.id;
            document.body.append(newHeader);
        })
        .catch(function(error) {
            const errorHeader = document.createElement("h1");
            errorHeader.textContent = error.message;
            document.body.append(errorHeader);
            console.log("errorHeader: ", errorHeader);
            console.log("error.message: ", error.message);
        });
}

submitData("Samuel Banya", "sam@example.com");

// Third variant of fetch to place everything within the 'fetch' method call:
/*
  fetch("http://localhost:3000/dogs", {
  method: "POST",
  headers: {
  "Content-Type": "application/json",
  "Accept": "application/json"
  },
  body: JSON.stringify({
  dogName: "Byron",
  dogBreed: "Poodle",
  }),
  });

*/
