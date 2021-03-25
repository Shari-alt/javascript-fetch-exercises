const url ='https://.typicode.com/todos/x'

fetch(url)
.then((response) => {
    if (response.ok) {
    return response.json();
    } else {
        throw new Error ();
    }
})

.catch((error) => {
    console.log(error);
    console.log(error.toString());
});