import './style.css';

fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/', {
    method: 'POST',
    body: JSON.stringify({
      name: "My first game",
      result: "My game ID is",
    }),
    headers: {
        'Content-type': 'applications/json; charset=UTF-8',
    },
})
.then((response) => response.json())
.then((json) => console.log(json));
