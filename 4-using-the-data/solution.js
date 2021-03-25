
const url = `https://randomuser.me/api/?inc=gender,name,picture&results=10`

const promise = fetch(url);
const dataPerson = promise.then(response => {

    if (response.ok) {
        return response.json();
    } else {
        throw new Error();
    }
}).then(dataObject => {
    console.log(dataObject);
    const main =document.querySelector('main');
    dataObject.results.forEach((person) => {
        const section = document.createElement('section');
        section.classList.add('person');
        const h2= document.createElement('h2');
        h2.textContent = `${person.name.title} ${person.name.first} ${person.name.last}`;
        const img =document.createElement('img');
        img.src = person.picture.medium;
        img.alt = `${person.name.title} ${person.name.first} ${person.name.last}`;
        main.append(section);
        section.append(h2);
        section.append(img);
    })
})
.catch((error) => {
    console.log(error.toString());
    console.log(error);
})