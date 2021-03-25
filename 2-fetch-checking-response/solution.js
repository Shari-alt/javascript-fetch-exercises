const url = `https://jsonplaceholder.typicode.com/todos/x`;

const promise = fetch(url);

promise.then(response => {
    if(response.ok) {
        return response.json(); 
    } else {
      console.log(response.status)
    }
});